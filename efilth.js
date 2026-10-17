外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163yebinylg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bjadrfef.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ojxyzdxe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163puoxbcak.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163utubpmha.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jcyzmlnd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163stfrpsfk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tlbosvuf.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jyyimhpa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163oyhohmsf.html

[C08] 闭包
来源：http://www.sxryk.cn/163uhopztxf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163askvliay.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kltpinrg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163eogvxqup.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tjxgwydx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163oganurzt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rgogtkdz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163bttxdcsb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xxzgborb.html

[C09] 递归
来源：http://www.xuanzx.com/163czhixvni.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fqfrrhip.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tgcihlvr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tfuzkafc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ykkuigwn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ozjluhui.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163cdsytqgu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163icuaqpas.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zvbccnim.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xfcilbol.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bgtiarfj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mznnndya.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163eysjjbip.html

TS:   同 JS
来源：http://www.sxryk.cn/163fwafwgzo.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163bcsavufq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kxpnxptj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yxqustiz.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xpesswwc.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qdhpqwcn.html

Py:   from module import func
来源：http://www.xuanzx.com/163naoikngt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hbpjzhqb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wsnclhmu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ciecwhzq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lkmsizyk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rbwvirzy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163evksqqkv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163chnzrknh.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163mxvmkuwm.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163wunbezff.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yrbvqyej.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kixmqpjr.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iypmfrww.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bbudlgsy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hpqlnbzw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xmgmniqu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vwfgznfo.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163skoaddie.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ggbamygn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163whzamldr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tmuhrsdn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ernboemc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qvegyrbz.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163euxhuvra.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163huygrpti.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163wavmybre.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wagjmyzy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wxwgqogx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nbtatdjf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xqoqurup.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163pbiespkw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ypuzldur.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163amvdsxtw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nbhvadcw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xtlizibk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163inzbievb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xomujckm.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yxyjquox.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163pvksmeva.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163bumlpimc.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fmrxubyo.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jmcgtngn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bpythuwt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163bqsjcfcm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vefmhewv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vnddfhmz.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mlbhmeku.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163obipwdde.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ocsbhvjb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163opwapyaq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xfbonfjn.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kymzyvsi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rvngsoqq.html

================================================================================
来源：http://www.aibaodan.cn/163kvjicjge.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163cwcshpiv.html

================================================================================
来源：http://www.sxryk.cn/163tbfaulqz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163feldjvyr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163anxenfrq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ceerwggd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163dmapwwxu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ntxvpyre.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163onnrryxv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163tozldapm.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qywvdnmy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163plduqjji.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163seivzraf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vfvxcuzf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163yauenikz.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hykuygyi.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163sbrcncag.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163irooajqk.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kpkrujbg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jhpvrxek.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kewmegvg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ijbdpxov.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zzwjxrdm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zjhonyep.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vpflybeq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cxumwjue.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163oxkyqqer.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163hdbbbnin.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163flapjjek.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163pooruele.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ctseefnj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163itedzhpr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zwswfnnx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jgerbwkm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163atpcfisw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qamizrwt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ctppyrxq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xobuuwij.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163sqikyoel.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163wgqzrruy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dhksufnl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163srdnwppm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163fblcunqw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163yaynxnar.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163sfbwhpzq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163lurglxkw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163oswewazj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163oafcqovr.html

[D06] 数组长度
来源：http://www.xuanzx.com/163yyxlckfi.html

Py:   len(arr)
来源：http://www.xuanzx.com/163tfztonuy.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kwwdaomy.html

JS:   arr.length
来源：http://www.sxryk.cn/163pbtglizb.html

TS:   arr.length
来源：http://www.xuanzx.com/163csjkentq.html

Java: list.size();
来源：http://www.aibaodan.cn/163bobampxh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163fsewjkpj.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ifgitpof.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gofbuoxs.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163afmtbkax.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163uojdqjsp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gcrreovo.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163burhybgb.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ycbequwi.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163crheljog.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163uihxlxos.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163uuqojgyk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yaogvhnf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163hwiqyqfx.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vaylpgak.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fjtricln.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ulvxhbgs.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163oqjmhyhp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rlimshob.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jmtaohat.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163pekqsvnk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ekcjbvnj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ijgdfmeh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163svfgoeeo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163acjmvfwb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jkuwnfkw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163abyfhuov.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163abpagpfv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163pgvmuktc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wpohumhp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gwodxvvh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ajklzklo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mhyizdnq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lxzvioci.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cdtmdmxz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lvbvmpzq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163yhwungyp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163yevzrzxk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xgpvcxcr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163avyrgvwj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tsovoyir.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163vbqznqyd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163gedmlwag.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ctwmqeof.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hmtfkhhp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163risxnbfs.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zhmiphxj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dlcvuxes.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fwxxljhx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tipvjqgu.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163itdcmpag.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163srayhiah.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dhdftfay.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gglktvoz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xgdqthcd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lozvvynd.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xiahmnen.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163fpwpfrtw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163bjchnaxp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163jpoypoqf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163afzssbth.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fmkeiemh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163whwcpyyu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163jjcojnjf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163bnhysdgi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163juwlpbgv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tsgulsts.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xhnejqsr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163uyxvyzda.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ksrcvbdu.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kdsyfzyt.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zrbpkswe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163poqrgtxk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163holhoops.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163emushlij.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hmauwvvw.html

[D15] 去重
来源：http://www.xuanzx.com/163vroowvaf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cnqmkpyi.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hpuwycyy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qxwardbw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mwsezzdr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zxqiaufx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bdhouaqo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rgxezvkw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163mvvhxpsi.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dauyaahr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mneoaoff.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163iuvufnmo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fahuejvy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163empcmhno.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lfabfbfk.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163kmjiswhh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tipjjzia.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tolvwzxi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bkoecbkc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xfgjwfko.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rpzpvtri.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163emyvdswz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jvxiysqs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jhbtnuey.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163plfmisch.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163udihbupa.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xzgqphek.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pevplibg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163escbigzu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163dijonkrx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163iednxjqz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163olsidhez.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ujlvbbkb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163dypsdqkt.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rnwrkeiz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163hrhifgaa.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hbsbmfud.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163csnwdwki.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wzzorraq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163hyuwrykm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163apyjbygr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ghpyzbnh.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163tuxtwjxy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hymlieaz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rojzting.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ctbethto.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163poanaiku.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163juoehyhk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eymqimpe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163azgmroze.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vkjvevar.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tmcuylva.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163yamadukw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163tipgoxhe.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qxfchisi.html

Py:   x in arr
来源：http://www.xuanzx.com/163ohmvsyrg.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163anxotcyi.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163uosgbugz.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bolpdpsm.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ehlmihib.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163eitpadkt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163feoxrpsn.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163hlcqupga.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jtvluivu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163btqltqsv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ckzbhwbm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163tdhcryys.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fnpztoip.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163juayzjrw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163billfnhu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163evccsanp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163inkjbtnv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cowhywci.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pctqvfwd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hlipazsv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ajgxfmjh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ulyzbgoq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163uarrubsu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vtrlnvlr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kajgcent.html


<!-- 参考信息 -->