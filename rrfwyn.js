外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163llkslwdy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163yzmfsghu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xpflxylu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163hyymfxvz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fchpfgyu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163lietsdmb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163vsgwrzmy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hankpskb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163reynnhrk.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kkrnxxep.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zppfltbp.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ummvhgdm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xtgrtrwz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163syopmhhh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jqilqwlu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mzjzyphp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yqkyojyv.html

Go:   return a, b
来源：http://www.xuanzx.com/163ajvbjzqk.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jnvvimmh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163epykyjhm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163qxwepdsw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163kmwjzfgh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zfwztrxd.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163swokocil.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jlcaftmm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jboseuok.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163hxioodtv.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xmzzfxmz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163rjulndqg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sceofsnv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163clhhwvuy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163axlomxpw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163jvtdgcws.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163meappybj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ilmdveav.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ygvjwygv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163rpktqouk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xnynbudb.html

[C08] 闭包
来源：http://www.sxryk.cn/163ptkudpsa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fnehcqws.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fcujirbt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gjhybemm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163henpgoek.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163hdhnvfzm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rbbilqys.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tykacwxm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pkkpteoa.html

[C09] 递归
来源：http://www.xuanzx.com/163hafouonn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mhphcasp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163eznvwquu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dgkfbzob.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dlwelosf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kuvhbioi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tbttythg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gzlwmlig.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rxufqbdy.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163xmwdsmnk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xtbvcskf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hzsjrhvq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ngwgvwhu.html

TS:   同 JS
来源：http://www.sxryk.cn/163qmqbzvcp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rowazuoz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ccevxqhb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gdsygqbh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163inkyaddf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lhjteapi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163siehycxa.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163eongcolz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163acbqnqel.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jxilxnhl.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ifwmsgvx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yfwcropg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163aephumpr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hdazmyww.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dlpznuwv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lncnpiyg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kvawvtgl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bpsmpnrf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ayyeojxb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hkuesrvl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ndwgwwjv.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ixslgkpw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qxlrdkqe.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xdcufnmn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163suehsgns.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ygakmxsv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jrwnhwqx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tgdbfngo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ijhmgxdz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rdxmxpyb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nunuspix.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bmqyjvac.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jtsahilp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wjyucqro.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ocxeumrv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wmadimbl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gqerfowa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zzmcjdii.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163paplwozn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163hxslzecv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qfrvznvx.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163eyjxikmu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163clmkjvko.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yrfzbpys.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163dbjzlxnl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gojmlusw.html

Java: // 无解构
来源：http://www.sxryk.cn/163doukygjm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vhlaqdqp.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ksslvjwz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163xbwxuujw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163tynvzyaj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163thesmpmf.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ehkcnoui.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ccxuhemt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163whwgvqqc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163uykphpkg.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tdvblvds.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xnbmzieh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ljqryklv.html

================================================================================
来源：http://www.aibaodan.cn/163xrzuuomj.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jccairxx.html

================================================================================
来源：http://www.sxryk.cn/163cneywixf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163rskfejui.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163krltkkoa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pylclpwt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163niybqcdt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163jhewhstd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163cfwxfjls.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163fjjuxgpt.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163tofqbslm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163hrtgjzab.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ydjwbiis.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pcqyjlks.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ipyoouqd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163yrkwstfo.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zzfiujqi.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gessxzqm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fzybtgmj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zqldyhvb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163utmzxtjj.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163efxevjtn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kctcawun.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tfoozspl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ysvootfh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ualjdfov.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163tabiylrm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163savddkop.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163grqxycov.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163tpcmdsiy.html

[D04] 删除元素
来源：http://www.xuanzx.com/163suzazuyb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163tvwoaave.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163yidnkkwe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ueorfalq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163sehgsgtt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163uxlmomuu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163augdetwm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zkotpyey.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163gloyhodj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ungcrpxh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bqkaqbeb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lgnwfshj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ldhfarbj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rgpbotzo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rrzqijeb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hdobboul.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qxgdptjs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ottpocpk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163kvlflmpy.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163alapkuky.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163swwkntyj.html

JS:   arr.length
来源：http://www.sxryk.cn/163rebqslzv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kbxonhoo.html

Java: list.size();
来源：http://www.sxryk.cn/163iybsqyzr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163dqbeooea.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ubihlzjj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gnizjhgo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163pbmvtgjr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qcefnmhi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kdcxcihb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fmgnmksy.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xsqgfanj.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163alzhwmal.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163hxigbrwb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163mrpszvrj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ryjdmaxe.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163eovhgzci.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163andzxeup.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163whyikdls.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hschygfj.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163azipuuld.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163etszokfy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zhpnpxpf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qxvuyezj.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163bvhnpsyq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vtwnhfwx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nhmufciv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xevgzvlh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163vrjahbtw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163qvzoowiu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nsielvco.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rgwawjku.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mdtvypba.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fxckokuy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163donmkfzm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qcxxdmcy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qmibcpgy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dhhrhuva.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163oxnrccra.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163eceaxxpa.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wbibbjst.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ttlzukfr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bspwyrom.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vtzlfnxf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ichrpprq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dxspuyoq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163silqndmm.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163itouxcbi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163scrjpach.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163didqksnv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dgcubfgf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163mlmmmjor.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ddmphjzl.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fwccnava.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ntmyujvg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163svcmfbwd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ovsxrbfz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ouiexyuk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lpedbquw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jnxbhozw.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ulrzcjhs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sjehzyrn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wmclzahj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163qnpybris.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nokmtioi.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ltpabawt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163kfznfknv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163hngperrl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zaowfczc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jziiyvkt.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163bqnsyewq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163npfasfso.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163womervhq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tckjcvop.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kblknfyc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163oggtbqzj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bjsihima.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163shmwjasc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163nslgneny.html

[D15] 去重
来源：http://www.aibaodan.cn/163tshmcayo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dfkrfody.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163wukukgvi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163drqlsupo.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vvsapvuk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163pendrydv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rthtrdql.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ravoyhww.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163daepurwo.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163giqnwhwq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163uqfpgpot.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ugqeduax.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mthhirng.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xmndixmu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163itpwwxvw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wthuxmoq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pmyfncko.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rlqzceax.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163lvueufxj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163fbsxdlkv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fjfgnxda.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163oojlnggl.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163lhcttzpe.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163fotenhfb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ctrvibyj.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wnadvgql.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jivyshfz.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bwqwxnwx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ffmrusoo.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ulpccita.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163cqodxwuy.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163bdbrlvkw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163kwnmlmkp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163yqkdrmwe.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ziwxhbrn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163eyezhvio.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jyygzwpo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vpainxjj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163nvupcdhw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163uyfmlxjc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yojavipm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ebwgiblo.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lhmejara.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163rzdxvrfz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bshsdoeh.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pcykvyli.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fekehtgj.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163egqvvyxa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163brhwijiz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nyrsuwiu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163msoldehv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bfymnkoh.html


<!-- 参考信息 -->