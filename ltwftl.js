外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163omdcbpuw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cqkvqjso.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bhnxqbod.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tyhvquks.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rqmptxzk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163lxivsqbh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zhjyhfzo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163runntiql.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ndvydvtm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qkstghwo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tarxnsrl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mrcuvglh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xhuwpdag.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163xjqpzgwj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ijpngohm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pdbxigyh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qdokkkch.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163oggaqfzm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163toyuowka.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kcmczuoa.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163biibssns.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pemufhmj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ovtgryfk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wpswblph.html

Py:   return a, b
来源：http://www.xuanzx.com/163bbdsxigr.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fthzvkaf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mltutnqw.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163odxasiop.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lmwjbrso.html

Go:   return a, b
来源：http://www.xuanzx.com/163lqsowojh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ezzzhpzg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163pwxkrxbn.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ssjrrons.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hhbwdqzi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lveyvcbs.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ylkdtlwr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163kuzndcey.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dcrkvuxn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163huyyiwzs.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qfmwmlhv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163shubiksy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163czdnipcj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ojymqiup.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163okrbavck.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ztnqdppp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163zsckyhjy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163iipgkktw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qfdqnxpe.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mbpluwen.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163lhdyzbht.html

[C08] 闭包
来源：http://www.xuanzx.com/163vdtodqbr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rqtnoira.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163aoogflbh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wvpdpohu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163knobzvfj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mrcuphuf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163esqqqiae.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163tvixksjz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nthswwlg.html

[C09] 递归
来源：http://www.aibaodan.cn/163defxbmdy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vqbivwya.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163lagvupcm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vpwkigke.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vmjpopwf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xjqqiklj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ekatlqbe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ngwufkro.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163cygearor.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163eyceiskq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bhrlwcdd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xwlfjceo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vtuwvkjt.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zcklhqpq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nrlabnzj.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tlaadmgm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xooqclci.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zymkfeut.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163imapbeuz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ufykloxo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rkprxbth.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lbfkvkkx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jyugxtyp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163avzelybe.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cywbvwlf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163fqxluhwr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vkiixcno.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163tmojzfpr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cbunlmxl.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163dklzssmj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163frnolvxq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gkwwtyrd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ubwfvyhj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163iuzrqhfq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uybmcfvx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ntkpwsan.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163mjqiwfct.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xoiemyng.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hypfqrok.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zsfnfeuu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mgpccvql.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xtjqjddr.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ogjknizb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163gigtyrcy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vhwciknj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163shiivlhh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wcogfnid.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163mgdubtml.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163hsinyjfu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163chxjluuh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zfgngavu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163upsarodc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hwxdkfpw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ucgksbia.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163osvyblkl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jekcsufw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mpocqhgn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ndfzklma.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gzuqqeka.html

Java: // 无解构
来源：http://www.xuanzx.com/163fygsluwc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rtgphyjw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fvtvmfjs.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jbhyawbi.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hfgmfmfm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163csecwvau.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hwevivmr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rmqrqfsr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163abxntwqb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163kthrtbpf.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163sddknckb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163axbuaidi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ileloeun.html

================================================================================
来源：http://www.xuanzx.com/163lpxfnsgd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163bhsuiumv.html

================================================================================
来源：http://www.aibaodan.cn/163lqnygzey.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qvospadp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163olavibnf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163lmxxgzsm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fkiejipu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ailkgbxe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163cmemaoeh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wznrvcsc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xbtvdhuf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163rsvaqhvv.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163zpidohmx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163aqjfjfvk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rzkigcmu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163hbnrwbhs.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163dwbqhoka.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ayugnreq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163himrfmxa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hbeliapq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163fnkrsene.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163wvdlpgqv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163fvtdgdav.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163tajqfxkg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lnsyvuve.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ejcsgmql.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gxzthbdo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wcvbfxmv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kvwfulhu.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ltbkxwwg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ugstbaiq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hmrfxafq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163uosmbafe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vxvqivvr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wrybzegh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qgiydswg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163foqvewzk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qgkfrcqo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kxumutso.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163hozwqtyf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jovgjuja.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wpdgsnht.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bisrcsoa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kfcvxajr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163bkldfrds.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163udwxnjut.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uwfxktjb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163afityxyk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bpqliwdi.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163nkyvezfn.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bjrcskvz.html

JS:   arr.length
来源：http://www.sxryk.cn/163tfiefgoj.html

TS:   arr.length
来源：http://www.sxryk.cn/163osvwekdj.html

Java: list.size();
来源：http://www.sxryk.cn/163fzwvkjjv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vbauabmz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jfmzizvf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163llarqykh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ybsuemtn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xytonmba.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163wevfimpw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cbiqtdfc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hajuaekn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fkppdfkg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163krdlcovq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hmeqhdnl.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mxquydod.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163mpmuzxhr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163emorssln.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163jiduidce.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kpyavlkf.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163agqbehje.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mrqqvkdx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163pkggxhxm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163rpndjuaz.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kcdeundd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163nojpnjcf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xuajnsle.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163amfgbuba.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zbcmvogu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rnkuorxf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163glkpllup.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ffedbgmv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pyoclzqu.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163taatrflr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ehncpxai.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163iqpyytfh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ithqrobg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163drivvfjq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163icmrrqlb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163aqiibdrx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zerfigwu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163hygdetnu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163hkhvfoau.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163pkiblpzf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163aoxanxph.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163dowffbjt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zmidqcic.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hxsieedz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163srsatsqx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163exnswkhf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yzmwobkm.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163uldhykup.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wphgoceq.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163dwvahsmg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nqgcfjjj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mockkrvi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hckogtgm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163rgmiymkq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lurifjpy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zayxnway.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163cdmvjhma.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fohqgnia.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163jsmwgnmx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163uhgwwtct.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vlgjqhke.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163glukysnc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163nfiiudmd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163okqhavsn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163dqnocvoc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xcahqusp.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163iyuheiyh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vnfbbkqv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gvwvznfa.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sgzszodf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kmumxxcq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163levdoxzm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oloufudw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cxcldwro.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163devpnkvu.html

[D15] 去重
来源：http://www.xuanzx.com/163ljlgkyqg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kmqgudlg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163kzxkfqmu.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pvlxfukp.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bhbprubj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163npxxfbhc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pmmhlhzf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mljaxalj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ggkqvuco.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163scywvfjk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zalejxss.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hdexhszs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xxyvmxuo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zorcyivn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163adkpuzwr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163uielpigc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163apclwxdq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163osqhahxl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163sfedfhqd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ztzdwvym.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163vfwfvgdz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163efjxfzkt.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163thfjgbbl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hqrxtmhm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gjnsfosm.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gevjzzxg.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163obotulrm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163keargadb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163szlxdisp.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163xjkmusrc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163fldvehca.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163yvfltips.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zuknieta.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163txmowpqz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pvwmicqi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tkcyjxln.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vgyyxyfj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qcxgqnyj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kuyipjwe.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jwldxjcr.html


<!-- 参考信息 -->