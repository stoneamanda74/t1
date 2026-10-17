外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ffbkphzs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hkqvofyv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qzqoespr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163awchqljr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163addnbfrw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ldvsewnh.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xoocvhgm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xmyvawkp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163znipllwj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lacpkszq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163pzjkdcfb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fqczmvop.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163awunrvey.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gcxobygu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163asbiqwet.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zsxpfwkz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rbasjtlo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ufkhovwt.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vxfeutse.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cvswpewf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hdsirmod.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163apbxigob.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163inylhiyq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163exwoqquu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163abwofehd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163dyxdcdqf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uecqrvqe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163njezbkhl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dooiigkl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uqmkxwya.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163vhbohdpc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qnzoaaac.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163knkwbbpn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sexfzxpg.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dhdtnerv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vwtjuuhl.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hqmeltpr.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dvdvhpuc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163stjekrko.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163prlriihr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163umffwjvg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lzlvbojt.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gwqczvva.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rdjqoejs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163zipfpnof.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uoscsdqx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163kfnmjdsu.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163pgkpraia.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tdbpnhzy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ewmfmddf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zyhdksae.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163txmqyiim.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163hebinyvl.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163puyzohtp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vbqigxfz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vtzaphif.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xzolzcdi.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163oyalnjkk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163dohpnakf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163icolhgek.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163zsjfszlz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kntqjbpu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163bzpvufvm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163aqsgkodz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163abyxiagi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xtljjvbm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bcvoaryl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qgwesjxz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rhnzilhd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bnhmzbqc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xijufjzs.html

[C09] 递归
来源：http://www.aibaodan.cn/163cqzwljbd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rsgkwvct.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163uraolauc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xytthmeb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qmkxchji.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163raqzfxpp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163eohnqqng.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163sjbsonts.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163jjtogckb.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gxfpwhhy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163gnvuimcc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hhjwcziu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163sppjwyhy.html

TS:   同 JS
来源：http://www.sxryk.cn/163dffwihhq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ymmjnvxo.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163wkpufmkh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wxrarbry.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163xerezitu.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xorqmvmm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163iqrhotpc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163apuahaqu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163jjaqonkt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jmhbhttw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163owxlwmuo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163jlvrrzlj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wzgpjera.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163icpyucty.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lwzrueab.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hjdwtugj.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vwtzhkdi.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qtjxecua.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163udqabvba.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cdnzoiux.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ldecaeid.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163odzhrlhz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163cncuxubu.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163drcyvrpc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vkkbujmz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vdlaoipf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ozbnmujx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163udrlecuz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jciahphp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hqzfuxir.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gmdfpiqa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cjuyeopc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163afkghquj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163newebbmx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zwzhiisf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hvsipbvw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163fkoympnd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ansimkkr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hbsmskgk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ygytbljo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163upztxjwt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163lsdbbtpj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ddqjldky.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zquxumvo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uskldqps.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163scsvijyj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lryczhji.html

Go:   // 无解构
来源：http://www.sxryk.cn/163acnszkqa.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hjjpwmac.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ayasbhxy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ppfjzqnl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rrymsuls.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cdihdxol.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163fmhaimbj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163txwehnci.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hbvdyheu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ekqhxpbq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163eqgptwqq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163wkqeprub.html

================================================================================
来源：http://www.xuanzx.com/163gqzghvjw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ghpefecg.html

================================================================================
来源：http://www.aibaodan.cn/163ckydjync.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163gevlsglq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163gtqpyxck.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163boiabufw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163okqgetfy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cwndlkzo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pbopmzzq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163myahyuba.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163jrprnueq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vccgxemv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dksyjtbp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jqzztfoz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ybnzxizw.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qbwebxgn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fpjshkfl.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163pzhurvlj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rritfkzt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ehtvxluj.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xxwnhmae.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163vqlliyds.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163cvhlbhsr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ykxhpcdh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zfvvjovu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163yuijiaso.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163mbpluzqm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163uduzpxuf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163rdwiruxq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163pcejgfor.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nazzmdat.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163llbknvcb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qstkjgqj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ttpqsblg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xuvqfgrz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163wwjxbdpl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ispnxfle.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vvfckzjh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163keapzyex.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lzpghbut.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vfsiifps.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vivycnnx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163grocdmnk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163hbbymugl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163iyeikmry.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dpomwawi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sxdavwlk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mnurzaju.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rfmdhjre.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xuyroqsz.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163mgglspar.html

JS:   arr.length
来源：http://www.sxryk.cn/163amvsfrkl.html

TS:   arr.length
来源：http://www.xuanzx.com/163dabnvlkf.html

Java: list.size();
来源：http://www.xuanzx.com/163feijpjst.html

Go:   len(arr)
来源：http://www.xuanzx.com/163iadntwmy.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gujlmyhn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vkhdmfja.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qtlnnvug.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dcxbnqsv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rkuwqhmz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dcktlfoc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nnrgnhhf.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vqdglcdw.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jytmxxaq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163scagvrmb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ycycokjl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163kevsydfe.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163phmfphsw.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dcvasxxl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dxortnyu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163gnsantrt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ywysmpby.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dsgonswe.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163sangrcsp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ziylsccf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163sdrcvjtm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tqtytqui.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ohdeisgy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fquhasnv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163qhumrqur.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163aomwackh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wrfivzhu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xjydwcow.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163plppkbkf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qzpkyrns.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dukustbg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tjwlxzwh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wjlfhgry.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lgjlqetp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qpnxvhqi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gpyhbfix.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163vyrmrske.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163auywvwrs.html

[D11] 反转数组
来源：http://www.xuanzx.com/163lcboyewy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ftdgscgy.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hxieokbn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163oeykxmkm.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wyfkadtd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163naigvgkg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163gqogkbgk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163onelrnng.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tfvdklvz.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163mlstuzen.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hlszjfeg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163stjwxulg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qsyxtxkj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163btncjmcp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163aznjjkim.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yuacemmk.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zaylnlmx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tysbedyt.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xdvcpuvv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163aekizmap.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yegrdwys.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163oulgzyij.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163acicjqhg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ctkwxksd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kaltosre.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163moivfywd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163goonyfpt.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tdfknagh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fmmmncwz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ibglkfxv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jmhvluei.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163crseigyt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163oljunwme.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sfqopbml.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163uyufrggv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163smzlfcnl.html

[D15] 去重
来源：http://www.sxryk.cn/163timeffzy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ardwnxep.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163eyecvdva.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nqrttgha.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163exrfplzp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163eksxaqah.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163gdckhzmk.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cdlxiawg.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dblpanvv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hgulqxdr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163iyxcpzoa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qpuvowxw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ukvqleea.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hafjmuzd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163gfytjqvf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163iwwblbrq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ahtyhrjg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163atjalllh.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hbpohuqs.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qvsunxeq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rqhemhfj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ibfigcex.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ebhjsamn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kfwzcktx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vqoddxoq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vgntszee.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rzxdkvtx.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ldkvlrpq.html


<!-- 参考信息 -->