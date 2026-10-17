外链999!wailian999！

Py:   if not data: return
来源：http://www.sxryk.cn/163cznlyrui.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163phigyive.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rlgwwgzd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dylpypsw.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mvcpidky.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rjfzmsrm.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163gvgubvfa.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zxlrksfu.html

================================================================================
来源：http://www.aibaodan.cn/163fabdbiew.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163oazymhvv.html

================================================================================
来源：http://www.xuanzx.com/163bdchocok.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163jjxnptgh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gbjetezy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rotqfpsr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ufdoezjb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pfxyydco.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vpyczurc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163biovmrll.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vwfzzeli.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wsndgukn.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zwhxeewu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dernteyk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163drwgcasn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163pfmsoaqu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wrhldihl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vthbrinc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163atvwfxtq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wmppatsf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ltnkiodu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wfvecsri.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163lhxglxsr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ufnnyjty.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yervoluk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cboasfaa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zyhygdku.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xiqclepp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163rhyzrytl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ofacwzfs.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gaznhgef.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163sbiwvbts.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163bpndnlcf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163myuvbvkm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163llsqgsjx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163hbofzlbi.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xzguubxc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yppvbxxn.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ipqdeter.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zbpsdmrj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163yfhedovc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163mviavmbu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hhaahusf.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163orecnwbr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uquaqygr.html

Go:   return a, b
来源：http://www.sxryk.cn/163amqfvged.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163cgqzbsjk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163dtavrkdy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ftmwrzqj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zniukjzk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xiykluhl.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163fwkertru.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163fkltlpcs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163cjrkgmvs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163huqinmtj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xgekgyes.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fhaacegc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xmjrfqdk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ycobkozs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jdjdtegu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163icrvkstq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nvteilza.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vmspgegd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rgykmwtk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rdlegchd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163oyilfjko.html

[C08] 闭包
来源：http://www.sxryk.cn/163lusiuykf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dxhjrixz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kfzbmbuv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xuhjzrjc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yppbyswo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163bqoxarkh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xmqiuiil.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ncfqccmg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fzzexxjo.html

[C09] 递归
来源：http://www.sxryk.cn/163jecsmjqr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rlutfapd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163nbppfwxw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rcaqcezp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mcdqhgix.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163psylnzbc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163naneycur.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163miypjlcb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mpcyfgji.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cgpucymv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163auwmqpkc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ezdzvjhi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163kruxnpwy.html

TS:   同 JS
来源：http://www.xuanzx.com/163exkejwpp.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163igdskcmt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163owatimjc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163reitlbzu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jhbpdtgi.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163tcgzjywf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rpuhidsk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163vpyjgijv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xijrydcu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qlofnhlg.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ztbhavfd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163crothadk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nfjpendu.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163abkzclyy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rxjszzhv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163phrksyti.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kxhtuiyv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qyizixbh.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163sbmbcvtv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163sozajyux.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163zdyrkpmu.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163spozszuf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kxvryrtj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xsxdlcou.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163yzotawca.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dshfelzh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ygcemeub.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163suwwjbec.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mfrywhbh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163rkxxlndy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rqgwkesc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163afrdtxaw.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163pgifjsxt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jfizewjg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163afkjyuce.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tyhdzdov.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163rsyirpzy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163kpsoelhq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gozkznnq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xalhvgaq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163tgmkrbqe.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tblkdrxa.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163orjwlivg.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nndcbaqc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163viqubmkm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gtgunkqr.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gvzfypom.html

Go:   // 无解构
来源：http://www.sxryk.cn/163pasqghrx.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lbuuadtg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163dvdtwzsn.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163whytplil.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nmhuugek.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163oxfqqowp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163apdnfwtd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163uvyodxtn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rpueanhu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hwvahggu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163orvuwmuf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kwtqpeiy.html

================================================================================
来源：http://www.aibaodan.cn/163luzrcrby.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vlxpreau.html

================================================================================
来源：http://www.aibaodan.cn/163snnhiygw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hcannivm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163roxyexif.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rtbcflbt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163fmwffeqy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yqevyyaf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163maejbvht.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163xjdrsjpz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163vgzgxsnu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163jhferyce.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ymgvnurd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163zbdiklcv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163cihajpqr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163lbamblyj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163fijdfmec.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sjmjgxjr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163udgcgomz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nsrppvmd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xuitifrc.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163sqkgajxz.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163fdvitdrq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163djzmhszt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cnwhrhaz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pidbnaog.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wtvuayho.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163frbnyldk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163bygdecaa.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jdlbdqks.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qokaeqhg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ujtctwev.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ackqomor.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163muprikyw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kjckniwg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fbctigie.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dznsrivk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ebuijnpk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kykbrpvd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163aozzspml.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163oyfutdkw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bdutccrv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163tnepgzjw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163shvohami.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163uijreueg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ocwfggqe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163iimnvfmk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gewgtnze.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vrupffsl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rxuitpto.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gqjxyrhx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jomfwbuj.html

TS:   arr.length
来源：http://www.xuanzx.com/163nmtvsvxc.html

Java: list.size();
来源：http://www.xuanzx.com/163wwseproi.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zxnrimvg.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ersrlfcs.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gujvdpfc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163njoolytg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gewuihfs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mtblpsad.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bsxgnmtt.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zkxihrjw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ulbjagse.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wfdqgaqc.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ayvjqzej.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xxfnyupj.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jatcipmq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163nmshuaxk.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163smqqofbo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163pemxzqzk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dnvelqar.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rnvlseza.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ofxfrveu.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lranbklp.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163eqwxjfts.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rgzbewdy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uozvgbtf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163oaxyhztk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wwugzcxs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163arzhotqn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163lnsouugs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xxmjqwnh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kacutuix.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jqvalnuy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ukvhqovy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163sjujhqkw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bzvhhwmb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mdakzhwb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163plxcoiei.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lagiqeht.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163nvpsnxdq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ynctcygi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163aowuinrp.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mkwyhjih.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163fvunbypc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163phoopjvi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163axiqmpgd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163efutnphk.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dziynxza.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bclhitvr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lbvsyona.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pkqkxkwn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163yjjjiypk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ibibemqi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ctdshyev.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pxnmnnix.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lshyjgrf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mzyjimzt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163mbcfezbw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ldusfwwr.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cofghpjy.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ucgewfaa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wquphhft.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nhqhembx.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pifmxyle.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163edgdwktm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ogdzftvr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163uwjrgmcn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ncqwksxg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fhkwaxrm.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qngbqkqq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xxazzdty.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163oruhrdnw.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163upgnlvjb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bjljoycg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163oamhyngl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nrhougwc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ugjjyafb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hgxdknys.html

[D15] 去重
来源：http://www.sxryk.cn/163cafumaxt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163onzsvssd.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163alujdgfq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163whyqeqtq.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uooezmid.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163iifcowyz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163jaeehdfm.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pttwydvm.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mpmmqaxz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jxlsaiib.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ixtbffof.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wwvlcycy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nhlpgagq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vlhwznhy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163zzyaeyba.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163cmucwuwk.html


<!-- 参考信息 -->