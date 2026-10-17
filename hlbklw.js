外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ijewdfts.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163qqznyiax.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hfmwvciv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163imtmrplv.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rbfkodao.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kjfokbmy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xnmdftfl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163nnfwibhy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cchwmavp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ztwdkkda.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fqzhnnzg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hwcwwizm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163pqsisqcb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ncpdrwcf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jxroakoh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lenunrxi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163odocvafh.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163byuvbnaa.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163juuhltwv.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dudqckrm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lpvzpuwh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163sviadcdm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ynafcyqj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163iqfjufjj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ozkcjldi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cksneqkt.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xmpfgxnk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163cmgxipbq.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163sdrfhyrw.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jxtxighl.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163lcnshres.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kmauqahm.html

================================================================================
来源：http://www.xuanzx.com/163efkohjal.html

C. 函数与作用域
来源：http://www.sxryk.cn/163owwujvhk.html

================================================================================
来源：http://www.xuanzx.com/163iqtthrit.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ibqnkqtj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mkkwlscv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163skjewvya.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163sprpeyzq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ceybornz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xzzxoeor.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163atrqmdmz.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xgjnoilo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uzcjjuxw.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163adwkxbzf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163rvzxtltz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163tlqqbqku.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ohretzdi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nizthanx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163afumiinz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163pqymjkpr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163riphqikh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163cckmqqnp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gzmngzsk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lrkytwnf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163odhixofy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163towyvygi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tjpzktmz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163koawngmy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163janlkcpt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dncvpkqk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163algrkjqe.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163rjiuctgj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163winaikuq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nmwnyiga.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xlrtvkno.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gcagoagv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163lryrxibt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163fuqtmnfb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xvioomrs.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rrsfvwwv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163dpyuwfpc.html

Py:   return a, b
来源：http://www.sxryk.cn/163pxsyuyel.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tumtgrsp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vtizkqpj.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163wlanjsyl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163hjrlasmv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rcndrtak.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163kcagbhub.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163weroupxv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163zjeuajtr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163sslnvnnc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163esjcinne.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hemwmqtp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ydndjctw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mxdjawhq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rybbdilx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ikyacsfx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ymboeurk.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gwcaoomb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163yuflelaw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163kowautbm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163cmhttbvh.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163vgsdvqfd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wscofyeb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163miolrlmz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zcccpnch.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163krceuggy.html

[C08] 闭包
来源：http://www.aibaodan.cn/163omrlgrrh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gjspiycd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lljoenbt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pklpqwjr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lkhzwnzh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wuskcess.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163lbasssqy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163asucpzba.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ewaofzlo.html

[C09] 递归
来源：http://www.aibaodan.cn/163ynssylln.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dfcfpmyf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163qwgnoyus.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163waggdvir.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xdlhkldk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gxwkilaj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163amgtuzni.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163berhkgrw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rejmxknw.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163blztpakb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163cjtilqmo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163tkvuwfnx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163otidddqp.html

TS:   同 JS
来源：http://www.sxryk.cn/163ihovadfn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163igoslrmk.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163trpenbzm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163lrgzppbi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rwvnkots.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163utlohtfq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163byfbaccy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lxdaaawu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mjaihuqu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pzzgsyae.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tnbgntkt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xrzixikc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163upirgwff.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vbaspnpa.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xfflbnzz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wxyqerzi.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ejofpjjr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jeavsupb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tzuxykjg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bemytkcu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ikpbosyp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163flcygsif.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ffjbtlub.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zmsgeybw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hgdmkkuf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163evnhzznz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nowrpvre.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163odgknvgo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163skjszbfx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jcudghwc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tvsuokhm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nfaqxywi.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163irhwokmp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163apkxdgpw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wcuwngmj.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zpyqipas.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ntxpkhty.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163tzfoccvx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ptopwrwi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xudedvid.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jylianle.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163xnpubjgm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163edmdasac.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lccxstbe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bqwzwlsi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pahixfdd.html

Java: // 无解构
来源：http://www.xuanzx.com/163stduabth.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163umpiufbk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163mdvubfkv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163shvzgwyz.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163iceaqjlm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163snrmdmxw.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163thkllovs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163dkkxqomj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ivffhipt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163denndtbl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163dcqxvach.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wktvnpoi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163iysuyzmg.html

================================================================================
来源：http://www.sxryk.cn/163vlygfzsy.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163mowjfkev.html

================================================================================
来源：http://www.sxryk.cn/163bcasgmtt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163egpdkblu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hrmbgfaf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163csuyyyys.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kzrqrdnm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pcertyoe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163zktvohzz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dfrnzsug.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163smqqzkev.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jggiqnyd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qezuyiso.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163esdnskai.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ffbkifdv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bxpbvwlt.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163kisvadkg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163paczxupd.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163gqyfpwus.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yeuygton.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vhlnkdlg.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163phavozdz.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xnzpzvcx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163fysgrfay.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163uxsdztza.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ayyqgwwa.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163iqlrcxtf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163surujdid.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163duwqistq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rjnulnzl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jjfdtdrl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163usgapesp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pcsrxgpc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163djhlaxwe.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163trxhedrx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dsjdjkuk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pfxpmztu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163bokccaow.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163tnichssv.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163umibjexd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zadscfnd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wthtocjm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163iozkrorj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fltpqvxs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jtuyvdst.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163zukmrzbb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ewimikyx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163auicbbxe.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vrhmdryl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vihkmlqa.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163fmbkdwgt.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bjjazjwj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fthhiroj.html

Java: list.size();
来源：http://www.aibaodan.cn/163hmzlgiea.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qeewyqax.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lesyqgjt.html

C#:   list.Count;
来源：http://www.xuanzx.com/163jftqhmkm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hjemdsng.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ylkguphc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163oakmxkrc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vxfperas.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vehhxlay.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163dgskkzti.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bohuozkl.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dpewnaxg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163frofhekw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163uzohqvqr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pnyuzbar.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dpawkitp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fbaoktdj.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163atjsbyxy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ggluznej.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ixcnjxpd.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qlwtrumg.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163eveeyexw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163oqdbpbmr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lgrbjjck.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vmixugej.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163fgrqcrhu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ywsgkyfk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lpkyqvin.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163lyqkoypv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xupgdfnr.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163sckxlqns.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lkreockk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jpqrgbhj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jwhhqndp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nkmnnjea.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fldkzizv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163iseugsjn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163peapqaxq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mxsmjuks.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163pxhnvinh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ouzagpka.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lezwtzxf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xrqzsvbm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vmlxpmiq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163czgjprcu.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163kqeaviof.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163acbvqsuo.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tqmbpmxz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xnplxapq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xtoerbnc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163otfoxjkv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163zxaqzzln.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kjnnpejz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163swwmuelq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wbtjtydj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163isrghfrk.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wyhqvssd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rwemvzbz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163lnnagvjv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ggfvdhsa.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vodwxqhi.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pmrzboiw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rijmnrkw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hquehasq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163pivclaox.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pnnxwdfi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qtjflszu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wnbmoowr.html


<!-- 参考信息 -->