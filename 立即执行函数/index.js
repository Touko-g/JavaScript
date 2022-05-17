(function (doc, tpl, tools) {
    function myTab(el) {
        this.el = doc.querySelector(el)
        this.data = JSON.parse(this.el.getAttribute('data'))
        this.index = 0
        this.init()
    }

    myTab.prototype.init = function () {
        this._render()
        this._bindEvent()
    }
    myTab.prototype._render = function () {
        var tabWrapper = document.createElement('div')
        var pageWrapper = document.createElement('div')
        var frag = document.createDocumentFragment()
        tabWrapper.className = 'tab-wrapper'
        pageWrapper.className = 'page-wrapper'

        this.data.forEach(function (item, index) {
            tabWrapper.innerHTML += tools.tplReplace(tpl.tab('tab'), {tab: item.tab, current: !index ? 'current' : ''})
            pageWrapper.innerHTML += tools.tplReplace(tpl.tab('page'), {
                page: item.page,
                current: !index ? 'current' : ''
            })
        })

        frag.appendChild(tabWrapper)
        frag.appendChild(pageWrapper)

        this.el.appendChild(frag)
    }
    myTab.prototype._bindEvent = function () {
        var doms = {
            tabItems: document.querySelectorAll('.tab-item'),
            pageItem: document.querySelectorAll('.page-item')
        }
        this.el.addEventListener('click', this._handleTabClick.bind(this, doms))
    }
    myTab.prototype._handleTabClick = function () {
        var doms = arguments[0],
            tar = arguments[1].target,
            className = tar.className.trim()
        if (className === 'tab-item') {
            doms.tabItems[this.index].className = 'tab-item'
            doms.pageItem[this.index].className = 'page-item'
            this.index = [].indexOf.call(doms.tabItems, tar)
            tar.className += ' current'
            doms.pageItem[this.index].className += ' current'
        }
    }
    window.myTab = myTab;
})(document, tpl, tools);