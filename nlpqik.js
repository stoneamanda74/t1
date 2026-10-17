外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163bnikptuv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lrhsrjts.html

================================================================================
来源：http://www.aibaodan.cn/163cdmsypuh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bjnsrbfj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163nzifftsq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xjmmpnzn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kpkqmyle.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xftnvlcl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wdqumomm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cicqusdq.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nbksxuvh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sokpjtjt.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ppztwrgn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163dkkldycc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163clttdyke.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163kmvdtapd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ififtgzz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ncfpuqwa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163scoopahd.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rxbfiqux.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163aewiccwu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zurvkdxw.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jommjagt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163aqhdcujm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pogzhktr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qnxnzhnq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xtisxjsu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163efcfqgjh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163tkifpziz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rxmzfrlq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ayntiukf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163udsjtrdg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gxanaadm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jjfktanw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163udkvbyyn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dyfwnybg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vylcxcpm.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163putvkmhu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pyjvleag.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hrjqptgb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ffvvuxat.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163kgkwtlha.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dafudlvg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kdaxbppb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163juigpgnq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163kxwkszlt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163khelpclz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163tsqaymdm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163qylrgyhw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163khmiidqy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163nudmedwt.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163esczpvek.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163pjaakihz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wsfoyfiw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ptkxqwej.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163yenwryip.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ocfokkmq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mlvhucnp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163evrypxos.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vddaahlc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ovtvxljh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163esawpwhz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163sqqwuvck.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hpveaspa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163axlxigzs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163tlbwsluw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ecfcufgn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163szgvkvzr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163udqqtjwn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163whrjbhtt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wrzxgbbt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pxioyxfo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jzuajmok.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bgnnhyeu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bcygzzct.html

[C09] 递归
来源：http://www.sxryk.cn/163bybywtiz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ttsdkwsb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163pbcxlqhd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fjrdneza.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163urbbreqo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ohyumqpt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163qcexkcev.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163etqdcmtx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rzquwhzx.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tfjqbhnm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163bsubvmiw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vguajtgh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163phfrishr.html

TS:   同 JS
来源：http://www.aibaodan.cn/163mcdyfeqg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fvpjytbb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dodhbbsc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lotznlke.html

C#:   块级作用域
来源：http://www.sxryk.cn/163njaskqow.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bufefqfg.html

Py:   from module import func
来源：http://www.sxryk.cn/163qfcahicg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163bcwypfal.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163nuyifedc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163iuppchii.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163efdbvixe.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163xsjontnx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163pzondwjh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zxrblmmg.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zcnfapfe.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163nuxfzfag.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bftaddkg.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kaapacpr.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163srzkamcw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cwuylqni.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163favqvipt.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163udkgunhu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zqjwkrjd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vrwtkdsi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163bnjttajd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ttlgrzbl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rdzralld.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mholebwa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vkegnahq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kmdremaf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dsaouqnh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ayiryvqd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163qagdeyox.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163psofkhma.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163eybxhsji.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pmnmxheb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wkrgqzss.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163siikbcmq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163exieevfk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jamcegbs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iwmxqxgj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ftdbzesh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ydceaasf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uekwjzme.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qzzaoxss.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zzevgrmt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163wmuapgjj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vdzeylpx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dgplimmn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163kwdpfray.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cecdazrs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wawpjlmf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163txfdjjvn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ijagvqar.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163aobyjxsr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dkeguqij.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vjwcbsmx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163pvejlwnv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163flzuucqq.html

================================================================================
来源：http://www.sxryk.cn/163duwtxilm.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jfrewxrz.html

================================================================================
来源：http://www.aibaodan.cn/163womgapfh.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xuxlfhuk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163xhwdikas.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qlbvrurm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mzynthdk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vowlaijj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lqupzqmw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zcasfgwh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rtfiysys.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zwmuiebe.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163yfqfegqw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163jlbrzabl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ucraezgg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yxlulmgg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163nnwwpyek.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rxtxlucn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cnknbuan.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fjbpuvme.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qlqtxfwl.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lifnpxna.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ypxtpphz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dyjiazpe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163bhleuppi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163udevjnax.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mrmkvtyd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hkszqlyt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163tlmecmlw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rtqbqrup.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jzmbohgl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163sgyvwjdc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mjwqossb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ermmpcax.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wkhywhsr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kcxtgkny.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wjyuswkf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zrgciuef.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163xpexxyoy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mfqdsxnu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163eycoxjef.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wpxhaeii.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mpdpwjmh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tuntxjrb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163cqqizzky.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wooieboe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dbyjievo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163grcldkdr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pevwcvwh.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qyzrruyg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jgrulqli.html

JS:   arr.length
来源：http://www.sxryk.cn/163jjxzekxt.html

TS:   arr.length
来源：http://www.xuanzx.com/163coedspok.html

Java: list.size();
来源：http://www.sxryk.cn/163rqincftf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yaiijnxz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jlmebvsy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163twyaptnw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yumuxxgp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163djrbvpbv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ekyqfdml.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163znuygtmb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iiekdtoq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163irpfedon.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qixskcgr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163rjwbkrvz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163avvcexcg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163avierkbs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163mxslximl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rvlxvvip.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163nmkdwenu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163clpnhtnm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163osgbozig.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ztvoebgz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ruptulas.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163aomogfxs.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163zzxpbfyx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xxaexioh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163otlczrmw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163otwgpuie.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rjpcewox.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163wdfgviwr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jslrjaxs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163amuaqrul.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163drevejqu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163tlstahfh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163yumyfcke.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163drgqcmet.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wneytjou.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sgyubrmx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rmekztrl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163quurauvi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wvotcfse.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wafnuuhj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nyythukj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ciogmvdl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163spqrallg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163omvtbiyg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163cyftdwme.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163osywxuqo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163uhnwdvlq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rgtxblll.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163invthbjp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wwlqslon.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163lhvtngjh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163onmeajup.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163drjvcajp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ivihasks.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fpgaehes.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ykdonwwp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163kbtxqunl.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ygklpgij.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163joezicig.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ytmeobvt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xocyjyce.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163aitwgdgg.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163apbgflai.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ickrnpkk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ozbocbsg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wylpchds.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163rdbivvjl.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ijkecksz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mbzpaonq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163pnxtipos.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163edmjccxz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kpuchowq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ekqptcko.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jrsqklcw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ohrcazcf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qnsxgyra.html

[D15] 去重
来源：http://www.aibaodan.cn/163ddlbdhfy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dxapgctn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163leubqeqw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jpggbkid.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qrrglmti.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163epfwqdus.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ccsdlhoq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163hmniemwe.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dyzlcnip.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xdughewd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dueikvsk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zthmmhju.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bevsgkod.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xqrdijwg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163orcqmygn.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163anwscioq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ouhlkryt.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qknqmnak.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163czmtqkzx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hhaawjvb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fvhqgyii.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ewusznpm.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163euiaogmy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cnusrzkh.html


<!-- 参考信息 -->