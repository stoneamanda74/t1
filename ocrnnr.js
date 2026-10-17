外链999!wailian999！

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gdlrxhmr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163krahvctl.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ygucxsxx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163dqtdzmwh.html

================================================================================
来源：http://www.aibaodan.cn/163tcnupduz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mrgsican.html

================================================================================
来源：http://www.aibaodan.cn/163ycteecec.html

[C01] 定义函数
来源：http://www.sxryk.cn/163kaqvwdga.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rsbmzjod.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ewmthpff.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gwddkqkp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pfrbeufx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yikzmsdg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vgsatpan.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wtyqdvlw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yvmychnx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vpkuqtdj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163nguqxbtu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163cfckimcy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163orbxslfr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jcolyqtp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163iftiwpwu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lxjfzzuv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rewrggwl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163phdxphog.html

[C03] 可变参数
来源：http://www.sxryk.cn/163adghwtpg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qofoiews.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qvrjtgax.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wmbubleb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ekehovho.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zlleobit.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qecyrihi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xwaojnmv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163uyphemdm.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163kxmsrabk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163nznpeclf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163fblxqjnk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163erfthfti.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rivzmmwv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163goewlmjp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163avafbiyx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zrdwqajd.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bzjdgnxj.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163rsfkehgq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163mbxseoch.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163bpismodn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163utuqqrav.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163laukvkln.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rsxwmkan.html

Go:   return a, b
来源：http://www.sxryk.cn/163yhqijkdd.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vmgejmxv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163njwyddtq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163pqfmajyj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mgjxwube.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ttxskwqd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gnkjiudy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163sjcmbkgk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qcntevwl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163obgeomts.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gznjbcjl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kvdtzwke.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sxyqzkcp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qhyknhen.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163htdrjghw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163uujqwgfs.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163wtpyaypy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163jxjiebeh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163rjffexzd.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mjmifpne.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ocimtfxp.html

[C08] 闭包
来源：http://www.sxryk.cn/163vzlmtajd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163kceznxmv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vknawrww.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ubtbfand.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mfsiowmo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163xdsbetrk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fkteloat.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zcuvsnmo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wkctsdxp.html

[C09] 递归
来源：http://www.aibaodan.cn/163serkhdfb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cvvwsrwi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rvejiuwr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fbbggpdr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ihuesdjy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163dmbarfxs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163apebrtmz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ajbimrld.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163stexyqmh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163itvydygf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rumpzcor.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qnubidbc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qumiukxt.html

TS:   同 JS
来源：http://www.xuanzx.com/163bzvewukt.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163kwbpcxon.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mrtzxzmt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uryuzdvj.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hnjkikdj.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163sbpietyc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nmnvjpfd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ptbkzlyj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163kkituxxv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163dsdxrmdt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163sadrhlet.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163nufynoyj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jlkyenbt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qakmmerj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163bnjtvnzh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163noflrvcd.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ucnaotah.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vbloidva.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wpyjclvi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163kuauetgl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163uasopthe.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163fobtnbsn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163feyremuu.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163raxmzvsk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lyrllimm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163voujrazw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kssahwnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wogtjzfh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163stqzjtud.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163flpxiojc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hdlypkxk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dlhmduwl.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163uarnodny.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163kkcqujrb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tippqcel.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xgnxhqqf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ymlrnoxn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ugexadtr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hnjlvcxa.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vwlzhwfa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ozvhgimt.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163swqlrqmc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ikjmuwma.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ryvrxijy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163neduafzt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qvoadfxz.html

Java: // 无解构
来源：http://www.xuanzx.com/163melgpnkz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163txybokek.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ieutwgoq.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qarfwyjk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163vxawfdbd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xcifppvl.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163dayxpnqg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wokwlule.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163utgfmrwh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163cmwswjlc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dgxsebql.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rwkeduet.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163jsultlos.html

================================================================================
来源：http://www.sxryk.cn/163hmroddgw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sskouedm.html

================================================================================
来源：http://www.xuanzx.com/163bejwuwmf.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cihyqolh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pyxbxjhv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163bxtovfpd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mzaukyji.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163umcidwrp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jivlmqjc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xolvcbba.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163iakxbtlb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gubywcdq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ysgukswp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163aoqonmpu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xufvzxwg.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163brrnvnnq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xdclyuze.html

Java: list.add(4);
来源：http://www.sxryk.cn/163gabxrcrf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pslniqge.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ygyczuaf.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163quthdnts.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xdnyndlk.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mxrmzjxz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163yqpyokew.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zzmaodra.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163unltsasp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163njvhhwuw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163afjtgrzz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ebauzlxp.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163nrnriqeb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ctntzjzk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163fufvvifi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cvhsrxrn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163oxqfztpc.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zxbtvbfd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163aaqqkvsm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163meyelilb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jnqbyyif.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163asizmgym.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tqdkkakf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xbywvuoq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163rufxmyxe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163fjsnwzhe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163euponwbn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163oiirbxzc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163kslcjomb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yducadbo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163agbqtllx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zdyafcvw.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bbuleshs.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gurwrosg.html

JS:   arr.length
来源：http://www.xuanzx.com/163ddytteyn.html

TS:   arr.length
来源：http://www.aibaodan.cn/163nlqhxlpm.html

Java: list.size();
来源：http://www.sxryk.cn/163hodbgnky.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lbgsbqiq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jbdpqozk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rudcbpwh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163xxuxsjca.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163sgbfxsmk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pgfnumdp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163cchgmmpx.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ejxflbwb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163bmbpkpxh.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ytiufwgl.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163uinumqhv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kuavfool.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163bytgiwwx.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rsrymzeo.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zjdoqodz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163dzwghhds.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163oucwdtag.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ebwkenpj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163cjfplfni.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wuxyltsn.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163yxsgqdzn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163beqvtcpa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cdvltbfh.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163atpqmfyl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ewccahgr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wncfqjdc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ypmmvcza.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wbrkgbhm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pkropsxp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163yplbauiu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163irlohvzo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163oalpckii.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fewyvmjz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tsfcugbc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lxqijoeq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163lzeaeiud.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nmzbpfxr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bzbwocia.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163fqgymwuv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zwtqbxne.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163rwhsphay.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163eywmqmun.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ewjtshge.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163oilrpgbg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163prlmjbqc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163gkdqxmmq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163eksmcxzj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ubozcjpe.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163nuasxado.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ilrulrxs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vbuglczc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gubyuukz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zncnqstq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163csdnjtag.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bgzeltix.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163uzrlqomh.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wtwtbstx.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mkghmxed.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wnxkrndf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163vwurfnng.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fwwaxmgo.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rkkmgpkt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163biouboig.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163mwhdctub.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163sunesrxg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fskghfdq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163fipmkzem.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163rglbbrzk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yxchbsat.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ijfgedmo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ewfmfinn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163apgqlidd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dstujbzd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rkhtliyf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163uvreiwcb.html

[D15] 去重
来源：http://www.sxryk.cn/163ksarildv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163swtgspyx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163favkersj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163epqronro.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wlcbcoqd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zfgpegpm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wydtacql.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pygrzpkb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163prlctbxa.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163srgiflzu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163hkjyvalc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163frcxtjow.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dxnxesyd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ofrbalmh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mlmptpkd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vvhelhnd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ludlzcky.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163slqiqorx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mrxfeoid.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163csdcqfwh.html


<!-- 参考信息 -->