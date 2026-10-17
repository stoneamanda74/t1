外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hjlvqcnj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163apdoghfi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kqfefdwi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163llnioocb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hsbsqkxe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163waewtbnr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pteprtay.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163fqgiepfz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nuzgetcc.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dlpzswii.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eoaagvsz.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xxomuzew.html

Py:   return a, b
来源：http://www.sxryk.cn/163urrqxcmw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163hbdmdtxi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kefkukax.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163enpnzipt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163vbgpcwpo.html

Go:   return a, b
来源：http://www.xuanzx.com/163uiqjyaeq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xeiimksj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ntfbbogp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xsnlklja.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cfktxnlc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163itnhkoas.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jkyhipvs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zqzbjwgi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mjcjsohm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163vgeyeays.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ngayydmw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kodviykm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vzvxhzuy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sqhvoljv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hhsgjnmf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163gprwzzyt.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163atvzckga.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vzachtkc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ugsbicqf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163izpsbcpl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ggmnrthc.html

[C08] 闭包
来源：http://www.xuanzx.com/163rjjuwxpa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163whxflqcu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163diebsnxz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163htmfpygl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xqdixnhn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163annfmxwa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163biqirxek.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cwmdymox.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yljwygcb.html

[C09] 递归
来源：http://www.sxryk.cn/163fqyohqtr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xwfxwqua.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163jljlspyx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ipugsice.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zkyfcpem.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ifzytolr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rkdonmoy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uecmbtot.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tlkhsdzt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rhthbsjw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163bvlbetou.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163huqltnjt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163urtwfrar.html

TS:   同 JS
来源：http://www.sxryk.cn/163ppnupntk.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163zqynwnsk.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163vqzlsbvb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163znxlqdgm.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ftejtnkn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163wsqtrkrj.html

Py:   from module import func
来源：http://www.sxryk.cn/163fntxjufy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rxkmijqz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163byiwnwxp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sxybojaz.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163bnjzzuam.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ztofhbbj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mdmzwsbz.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163uismescx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uqacanru.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cxdbyrtk.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163joatqxjz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lquhjpwt.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wauubsdq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qqueomfp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wclefxur.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163upeyuzsh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163kxvaewea.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zgviufug.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zgxegbcc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tnqvdtsd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163weqxovgb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qptnmslo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ndsodwez.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163oisdqxqn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ddjmchfx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nofklcmj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163qkdfveva.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zmjzeuux.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163afktqfqf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mlnrcvbr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163brkokiid.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bpezqehu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163loeambvi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mihrqgah.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vwrahucw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163bzgxgzel.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163peuwnsbw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163spedvuuo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hmaidkke.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tpwifpad.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dgdrodxa.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163zlvzrlzk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163iijwgbyf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163falaxzii.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xqlrnacx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hcwwdvfx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163lwgldexp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163xyodcxrj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vsiyuefl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ggdearax.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163irxurfrp.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163pvysggay.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163kepfaunl.html

================================================================================
来源：http://www.sxryk.cn/163xyhzhxut.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163voqvawor.html

================================================================================
来源：http://www.sxryk.cn/163ebmbbvgz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wthnjorx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163zugfaenx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xolpewcb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xxsqxwah.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163gplrsylf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163tusshvne.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163aiiuptea.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kecnslpx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jlyiweqj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163nqkmggaz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nlfrnblk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nducvflz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163plmtfeil.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ufbfzjfi.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163xyvgchct.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zjrftjmp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163rdwwvank.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xejjsaaj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ipqqxqzl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163aghcehqk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xjugzbwi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ibcahgrx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ztivvyiq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163wsesqkpd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xdgitqfm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wmoklqka.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163bmqmfsfj.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ltlfkqxq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kvpraasq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qplmupqm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163iezxmkga.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163eorzvpac.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163myzcffhy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jwsauuye.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qzucyoxf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163xawhdbyu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163saffsajy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fqsoxtdq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ryocrenc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163rbqsxspc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vllectqj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163kmkuoprb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tgmitajw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cigomiow.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ixkowehb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163igezterj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163blbxfqoe.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dfbomurq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163pvtchemw.html

TS:   arr.length
来源：http://www.sxryk.cn/163mkwuhosr.html

Java: list.size();
来源：http://www.aibaodan.cn/163lgpldvax.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163rftypgno.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lowjslxv.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gambuygc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bvjzymgm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163tquczslc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vgxzzfef.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kscenmnh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hesjfoqc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xhbjwohg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wwixmxbo.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163udktpgkn.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jeladrew.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ueyurfgm.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ezadazgf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vtuitxdp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pahiashc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ikbvvlyk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zqdwmlva.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yuscdojw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163nlaajtfz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qnnqyeqn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wzkiuiwr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fdrwrvoy.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xqaajkoz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163podnesft.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jherfsjz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163hqolvqtf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yeoisguw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lessgxwc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163fxltkxxt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163awpnnajp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163uyqickxo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ximzxolm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mcijqngs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fyoxwjxb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qlvaevnz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163aflrivrp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163txqhbykm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163infumbcn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163sxseolfb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zrwudatb.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mvmgerdh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163iqfmquen.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qdjcbuss.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163uaflefxc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ymrexhdi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wyocfmrt.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ciofxqul.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163iqfqyniq.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163nmgqeimp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hhagqtvs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pyrqljzr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hcttkrkr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163oosqnola.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163upqsjgfx.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163uiapwbrv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163nhvefjuc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163twojyodr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163svpolnxt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ceeiydih.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cuskqrov.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xqjxgvca.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163itqakfzu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163wjebumab.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rzliujdg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163wrdtraeg.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163etghdnyl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163bpcpdmnl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lvtjsdjp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sledkcft.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jjqrljax.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pcdjkkhn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xiyzundc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163aoffxxrn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fblakfif.html

[D15] 去重
来源：http://www.xuanzx.com/163etcifpgl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mlgdjhxg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tmvxflio.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jfyffpir.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xjcxrklk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163hyshifrz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ouystcij.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nejgnuyn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163vgmedokx.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163prcitksx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163oovnxqsf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163oeehpuac.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qovyjsdc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mlcqqxah.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cpodemlx.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qxnesphy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163zlhuesbr.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zosqtgha.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rvcxxhfw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ndicrdiy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163aimqlohj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jwadxjxw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wjobnmlm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ikpjlggk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163glbwihgi.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163dmkeytii.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rstemqxp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ncqvzuhm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163doerbvjd.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xoiqxdgm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163uiompofb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dljogkjg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bvcpxlqv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wjgbmfdo.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163gnzrdazr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163iivicjwi.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163koashnks.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qxmfzseh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ucjdesvw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hpkkpqec.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cbmfnjzn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163pupfaced.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163shkjwcsw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zivgmvdz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qbpioosp.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uflezzdc.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jthgvbzd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163anxufpya.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vihhbkpb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kcksjaro.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163kattpalw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hayodwro.html


<!-- 参考信息 -->