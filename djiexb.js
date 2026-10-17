外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163bpmrxohl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163uixqrtpv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qxmcjely.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163njrupref.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ghylwbcd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163bkhnmtyq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xtmwunfo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bfczqcce.html

TS:   同 JS
来源：http://www.xuanzx.com/163ruwcizsz.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163gpwgwlha.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163oluelilc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qujfkfwt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mhqpttym.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163hbfjqriv.html

Py:   from module import func
来源：http://www.sxryk.cn/163wtemvngd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163tcyoftkv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163uodcalhk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163uqolvlic.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163dweinvss.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rrhujygq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zekvntdi.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ttsmbmsv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163efynpkuk.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tugjrsrw.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163jugfcrvc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163urfftubu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oodapylk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qcqwkcxi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gbtbpdft.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vrbdwjvl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gjjptdnp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163agbyukxo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wnhwthlr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163meflbott.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ohoedezg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rejnuplk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cmvzenzt.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kwyvimxq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163wsiluylj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hstjvrdx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ptpzurdp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hgcdfqfw.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163qpmghmwq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163sdmrpdnx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163efynlqul.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163okncfhrk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163icsbxyhi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163olpzdqrc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163baeybict.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jzscehja.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wiyrwhqv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rthprfej.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163zzgnruwg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163uedbizgb.html

Java: // 无解构
来源：http://www.xuanzx.com/163spyvtxqw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lxgxsayx.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hxaedsai.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rqowvhgl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163osgzlxoy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rdwydojt.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fglylsrx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jdvkjwuj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163hjvrrdra.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163svryoznd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bwomtozt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mkaikypx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163joxryfle.html

================================================================================
来源：http://www.xuanzx.com/163yerwvewl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sqauaifv.html

================================================================================
来源：http://www.xuanzx.com/163ridrgbtm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qweqkuuj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mpwdjvkc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ettlpttj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163atyzbdvq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163urpebrhw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lsiwaycq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163uddediob.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ieugsuht.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163scfnkwrp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rwhmejxs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gagirhqj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rvjowtaa.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ldscmkbd.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mibuevfe.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qmgphtdu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ksnwbngd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mebpqjzy.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ltozqcsz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hmsgeugy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hrjwallg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xzwovemj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163qffamyup.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vdkuxoke.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rphwqvzx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163alobfeqq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rwajoloz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xasknsfx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pqvmhbuw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163muylnwir.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163kndxszdl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qwmgsbnj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163acwabybg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bwkrvnwh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uzhfxohg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nuvmzsls.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mkqntxbw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163dehgzspl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ddvzjiiz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zrxmeadu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163kwwuywdl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oftwdwpd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ucdkhpvm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163athdhobr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fjauydma.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163jjifoqbq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163psrqnxlu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vshirvdv.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rjojgugt.html

JS:   arr.length
来源：http://www.xuanzx.com/163qajmzxzz.html

TS:   arr.length
来源：http://www.xuanzx.com/163tjloiqxo.html

Java: list.size();
来源：http://www.aibaodan.cn/163qkdpsbsl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163iqppqerr.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gklvzjpv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jloavkyt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bkkekyhi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pmeopdae.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lislpvue.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sgmsbfma.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gqoopqdf.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xdwpwlck.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163nqrjrugx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163citnqirv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fplbbazv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xhlxugrf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163adqpjoaq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163gpswxklp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qjrwyzdb.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163qrvjcugq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wpfxopvc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mhkbgeep.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163hruyuniq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pcixoeyv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ierznfsp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vtzbxamb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wgwtywqo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xgxxhuuy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dxdepkim.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163myxwuxze.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163boohxjbu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hlnomebc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mwwjyesk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163caznnvbn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163yctxmevp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kqfrvvyq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fmcntdwt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163takqafhg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163iawpztdv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163aadygrub.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xypihnml.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xtgnmzga.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ulxqkafp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ifhnrogw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wnxxpzuv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163euulgmaz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zurgkmlh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163imzscikm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cyyglvzq.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tprqjdwi.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163uzfejqvv.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163thjeqirj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hbmusmwg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mcnlecea.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163neyttuue.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xzpblxaz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mmpyjear.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zvbydajt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zbyxxckl.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dihhxjxu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nfujnubq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163enprawlx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ooeuiurr.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xrtyxtmu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hcavawya.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163rsddfitq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163disrckyu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ezagskha.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dqfeysoi.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vszxotwb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rchteboo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fbwtyctm.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ndowkqkb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kchwajoy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163yvtykbgr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nuzsmadm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163udjxfnfd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163fmguvynx.html

[D15] 去重
来源：http://www.aibaodan.cn/163xsswllpn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qmjiiltf.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163wlbhlhgq.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kurkspek.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yhxzytbb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163lbwiecsq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163osxrnreo.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163tyskfdci.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163etrzucdh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dyjufxjg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ujuaiscv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ggtjdsfe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163knnqhaqf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ojreczot.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163jnklwjph.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163epxpbgyn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ojmboeeo.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wkwrxpmo.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zzjsuzcp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nhkqmgdj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163uizcyskw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163nyzyvvbw.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wgremmwv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ssvkpcgv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163mwfkwbyp.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ysajgalk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zzqrzliz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qrrhpjku.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163felpatsi.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ltwjqkbp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163mrpyndty.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ltaoarwr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163akznyydz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tnbfhvir.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dwfzqlfu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163czaryhyx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cpzmctug.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ttldycfg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163bsgqlepb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mykvlsfc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qwhdzria.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zwxgnbym.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mhfyzyhv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zhdtwomh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vnywawfg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163drqodnrj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163zuujfbzo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vhxvrzdw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gvnjigrl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hffokkow.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bknirtxg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xkvapkab.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tupfqvgz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zyahbmuy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yyiofohp.html

Py:   x in arr
来源：http://www.xuanzx.com/163fuucwlmp.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163davsdoka.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gbdychfx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163joqifvwh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163gvvkdzma.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nsacglgy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nhkrepcu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gjbnmvum.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tuzdaftw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163laxrgcae.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vscpyzag.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lryatmxw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jprxmspu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163bfgumeof.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wurlzlqm.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163hpsqdtpp.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mivclyvl.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163avksaxup.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ilcrevvx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bchwcfmw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xwfohsfz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tgihvgjv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qlddtkmz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qnmtfnew.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163bbzhjbbn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bmsywgte.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ufltdacq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163hocqotjy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163igwetdwx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yumyxcds.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jgltzhny.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ukgymwex.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hvhxwwxt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bggxdlsu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163hlferarb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163avrawgrk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nqxtphqt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163abgygyue.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163qajmagaz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fdpxgwos.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163yuizjyod.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hnmabuxk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zdldexsv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163agxludjd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163emtrytre.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163igjujvtw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163mikmnwap.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bjmzohgf.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tpveufkf.html


<!-- 参考信息 -->