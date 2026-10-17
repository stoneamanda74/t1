外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nessnoec.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163nsrjrdfj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jszqpoen.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bauhhyin.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163onfgjdnu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163bcpbxytx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vckvxxfm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163fsrorhwj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163htympqwp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ihayijsp.html

[C08] 闭包
来源：http://www.xuanzx.com/163sylaztlm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163equdfbgm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lwjscdux.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vmironck.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ciwcqekr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fmvbosur.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xvdejufb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163oiktcsaj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163giukegso.html

[C09] 递归
来源：http://www.sxryk.cn/163aubeqras.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lbzblwox.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hdoblrev.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ohfmaplv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ieltlcpt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fonbofjz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lcjsmhxk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vmomnhlx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163feghjyoz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jjjdmfxn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163yelbwizz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163cfcxbswr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163uejzzdph.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sgggkbjy.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163cnbzgjyk.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bwbzzzia.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vvlalauy.html

C#:   块级作用域
来源：http://www.xuanzx.com/163behvjdjs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rgiooszt.html

Py:   from module import func
来源：http://www.sxryk.cn/163qyelgstr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163pgdpukca.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163voygaegg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jvrswzhp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qhmaolya.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fqpyjtdd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jhluodmp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bdgndiet.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ditrfjsc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wkqbhuag.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fcdlgnoi.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zaypfndf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163baqddiyl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163dcljfmpw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bppcnfws.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iclgdmqr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qurjnhep.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163lenpeold.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163sgflnmdj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cedernss.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vpzfweec.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yqywxaaf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wkdczsdx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dkzdqzfv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163vdkvslwi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163uxlwvwkl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pbzhbuoz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163krbflpkg.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ajmidmlu.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163bihicjce.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wwnipouo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163shdgkywa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163czrastfl.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163iyztcpow.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ymdtexcy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163akccausl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iawmxliy.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zucvnxhc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163oucmyuzv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163oijnfhly.html

Java: // 无解构
来源：http://www.aibaodan.cn/163iczakdla.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lyegddhx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163kmpqyuwh.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163raospjnl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jgoshafs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jeuzrlnu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163obbagwef.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ywhpcjhn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qjlleinq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vikeaxpz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ztxcakir.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jnkepjaw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163loxxhrvq.html

================================================================================
来源：http://www.xuanzx.com/163totjcxef.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cwfpuyyp.html

================================================================================
来源：http://www.xuanzx.com/163ygrgskan.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ahbueuin.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163uqtdchvk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bahxllko.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hqmlgbxf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cvjipeqo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hssfvwsm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ejbyqbnr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jrzzovao.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zxarzneo.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163cgmahqoi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gcumnjwk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163iahatwhu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163lbezznzd.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163thgwzzys.html

Java: list.add(4);
来源：http://www.xuanzx.com/163uesypayb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ldjerxnx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qpwjjlcf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ktqmrtth.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163czdoboyo.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xfuhgqax.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pvuomild.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vfixmdvq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163plddngva.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163edoejziq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jpeeqmxa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nlmtofzh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kaaobtzk.html

[D04] 删除元素
来源：http://www.xuanzx.com/163gkwvfogg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dfefzvdh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163uxwlming.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ejgmejol.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xouqrrtr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163odtnfznw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163nhxkvqlr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163nkqbhikb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163tqhimqpc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kzqspcqy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mjvxmbxi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xnpuxsgm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mothmkmy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qvsgznwn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163bywfsegd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tomjatxw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wkxcvjxk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163gygwtamj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tooonala.html

Py:   len(arr)
来源：http://www.sxryk.cn/163avuweoqg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163pfbmhbwk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163uazaauop.html

TS:   arr.length
来源：http://www.xuanzx.com/163goahlvge.html

Java: list.size();
来源：http://www.aibaodan.cn/163kictgzld.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xmjladlq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pwuepgxu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vmynmtab.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vgklwstv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163svfqyzhz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163udevfnej.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ggrqaeeq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uqphpcyv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163flismffd.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cpyazqge.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ipdosorr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hohgyiyc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163eboimufv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163smifjfqd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sgueabsr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ofbwbpfx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163aauoisnn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tmeaarka.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ugnkxyel.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xekvlfkg.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163zxrvcicj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xmzmyznv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163bdvkgcrl.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163kkqzkkla.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163udepckrl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jetrewvv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163elflstun.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163hyikzlni.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163upzneptp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ydvksyjk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qrittbeb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163tbcygvwf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uejpkbsb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sgtrorup.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163enruglrw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fxmweegv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vamjfsdi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dwwkodam.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bqsmdmga.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ebecmfsi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163fonsiqwk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163asjgwmqh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qbrcwoty.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163gmvksvew.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hofwrdnu.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wedrlypy.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vpgcdruh.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163axejzktr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163abdyuyrf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163nakkywsz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zqkbimdq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163swyxmggd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kdjterrk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ftbwnrpv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163orphxzvl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pqddtqqm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tikkhnsz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163oxkkqdfv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zigcicro.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163usgcoohs.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rkrhezyn.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zpwyvwxv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163cpgznsun.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163lnbxhjrb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163fnvyqnod.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163vbyzyelp.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rbcweuzj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xrdgvabf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ahlwvhtw.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vbwwclar.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mqwjlpmw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mfbeprzm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ejhfefkf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wjdfxkzk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vjjpkvtd.html

[D15] 去重
来源：http://www.xuanzx.com/163qgfypmcj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dgrftsco.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nnjydxiw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vyjujysx.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kvrosjft.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fuvfbnin.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163hxqejmmh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yfyexklb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mtovgipj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163vqlvcptq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163otrledga.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163tmjldvet.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hqavguwr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uiiinyxq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163imdyxyzg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xdkewvly.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fpmchwmg.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wtbjxtbq.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163raujqjzb.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rnrjqchn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dxoqggyg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hlkdnkjj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163bptltvha.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lijscpft.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qmdtodgq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tcysyzss.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163pktseorf.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163iryjgqgy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163kehqbooq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wyvdjowi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163uvllophn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hstmkeow.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163swyjuatc.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163drxkknip.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ttyryzhj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hifpwpqu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163mdgdwoxd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ygsmsiag.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163yxrtfgfm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163duloieku.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gvaczgiq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163fsaajpry.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xlnpadct.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hzojtque.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163iemwgjyd.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mpbzjsxh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jvdjolhv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163atpwqfcm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hicsiamk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zddveimz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ihadbjbv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vcmafshp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163gdpcfwkf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tnwwcqwb.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163wcnubdmb.html

Py:   x in arr
来源：http://www.xuanzx.com/163usgpfdim.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gtmjurdw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163tyiehoba.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pusgrisj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tpvdnwri.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163spltqrqt.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bnvalijj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163crntcnpt.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163omdlptkr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cocrrgwl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tlouaoqm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163elcckdkp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kmblnlbi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ertmlkej.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mywxfzhf.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163cbladmtm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ueffzxgu.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163yyyiqqbx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163xjaiyonp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163flhanclu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nmpycccw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163avnqiilj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163nvyxjeue.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163natnslxx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163yoggffzp.html


<!-- 参考信息 -->