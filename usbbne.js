外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163rcwvwfbt.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ywrurmsu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vejawklb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fuwzcyfc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163crmqxipr.html

Go:   return a, b
来源：http://www.xuanzx.com/163hmbnhybr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163sloodxyu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rbijymij.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163kxzbkmrt.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163sbqdoxne.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163klosvuig.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rekfkcul.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qsgvpvry.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vmrxehoa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163epbhxhaj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163toaaavsj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163wpzjohqp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mymtpnwq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163hxueufhp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rqspolyz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xcycrghy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163bshdlbfk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ezcvcxao.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163clwerjmr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163gvxxocdq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jfsadmcv.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lykkfgcr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qyzxfxvq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163yausipfr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lopplerk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yndcvqrp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rbhacmmp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163inaljyll.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163qzrehnzi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gglobrwi.html

[C09] 递归
来源：http://www.xuanzx.com/163mduuhhmc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cvvruvxb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163cdkycbdl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ntvadgov.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mxhkxudh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ewphlafq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163trfbljgn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ptokabop.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tbhohfpu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163boppiovy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163cscvlhkc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163yzucebay.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163uoncsjle.html

TS:   同 JS
来源：http://www.sxryk.cn/163eijrqjgo.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bnuvivlb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gwmmactu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qrkbhtda.html

C#:   块级作用域
来源：http://www.sxryk.cn/163eavrwjko.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vkhbgvcj.html

Py:   from module import func
来源：http://www.xuanzx.com/163kcmrrnds.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163iixwkoau.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hvddkgkw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qnjzhoho.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ewvgtdzs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nkckazbm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163quyrzqdc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gsuxxjiq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163trpeexgv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163bkrslesg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qmcdsbpx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163aukpbjyk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dwmspyqi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ysxzklyu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qasrldiy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vnfzehuj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gddpycnj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ewjjutkn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pyipkxsc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163exseaxsg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uuktloam.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163klhwrdgl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rssmrrfu.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ofwllmko.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163obddlbfi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rfvgixna.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dxfezmer.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mcrnwbdb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163drcwebao.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zwdqiqoy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vvcbxenz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cdvcrneu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xgfpbcbm.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163xjfzqkaz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gmgnmdgh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xdbovmyr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ctgppgiz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ggbuqsva.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qvrdolqm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kmmpsbzj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lsrztfbe.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163zaqnszwp.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163buqnlqkj.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163kyisyesw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hukdjnsx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kefvfrjc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ezfomgih.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cwvzwaku.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wwybcbxy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kmwkqddu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jmtsdzwu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dqonozws.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163uoicprcx.html

================================================================================
来源：http://www.sxryk.cn/163adwgsgmr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163kmvowzbm.html

================================================================================
来源：http://www.aibaodan.cn/163lcvofhql.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fehhmjdn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ojwhdles.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vawotfpt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pmomedcq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163moyjipbc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163iwegbczw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ljhgnbdb.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ldmxguns.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qkqkmwmp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hswfpvpi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nwgmjrde.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qcqfdfji.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163htrhfrkg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163iipgorre.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wbxnpydo.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qvdhrphr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163goobtbyr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163fubwklcj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nprsvlop.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163wplorxts.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163losagqea.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jcwvubse.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kshdfwmw.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163bgfkaqxh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163eeebypkg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163frrwxlxb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wouahxmz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163zzsqejcn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163kbqxknwj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163prbeutdc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vvsmrpgq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163fxmnxhfr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dmmzciuc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163fcvarmhr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qijexidr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163pgflfcpn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163krnxdhkt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jbkqesvj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wabmpdsn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bmbvlkjh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163wwidxyvd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ntkaughz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163urzrxrlo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163iuxrkpof.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hnpqzxhk.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zfuuoddq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163hfjnogwv.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nrgyzttp.html

JS:   arr.length
来源：http://www.sxryk.cn/163criyckzq.html

TS:   arr.length
来源：http://www.xuanzx.com/163diggzwgu.html

Java: list.size();
来源：http://www.xuanzx.com/163cyxxnfuy.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vhhiazyk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jamcyjdi.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bnxtfplk.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163slxrqeex.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163macwxqar.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bfaxbndn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hkxizxuf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zpmbtdpc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163svbxuyvq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163pfzeaafi.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163sdmuopee.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163udcrwwoi.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163eunuisuz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ikbuopeh.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dytrlikb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jfggywfw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mzkbwzwh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163iqhugvlw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mkqqsyse.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ykptkzwm.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163iyookjne.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xqhwhdyn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rbvhbjle.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vezaodpg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163mvepdaan.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163yyjkcwbm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163hzkeywrc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163agzxvjre.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fjzpgvav.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ocdpwtah.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163hhhrlccq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xlxfycnz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163eyeylzuk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zrmzlnbl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ftetpdji.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gcfzniax.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qqjogptd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163xnhiyqnm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vatolljj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wtgtjpeu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ucwkojyh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163esxpmbls.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ycailxui.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163yjwfpuhm.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163aqopebqa.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hmwgsebw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ohvquczv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163neggqhte.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ryrzfojn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163grmgafeh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ejnouyov.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tafpxulc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ohcutbjh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wgxludfb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163auzthviz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163waqkvptf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ysvevlaq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gdhtyowq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163odahewuu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163velqczxe.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iudizzng.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qavweikg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163oczwcfte.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163uhkyeabi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163xoinjywf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163rcmemlev.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163umviadas.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dvizjbrh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rekwqcod.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pljsjcim.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163szhxzlxz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163myxhulzq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zaqvepwn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163hmbxaysh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cojbelpn.html

[D15] 去重
来源：http://www.xuanzx.com/163teebwgkr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ogghwipq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163flqbfblp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lrvdqmnp.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ihqlylgh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163urrlhidj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jclqnwmx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163oghkctow.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hqyrwrrv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163iapwzufw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163kkcxoebe.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ltqnmbuc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163drtmiqso.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163waoiwygi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ltgzqhic.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bzxpwpta.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163bqkocnla.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rwfjibrx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163silamcpm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gffehixc.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ctjovpij.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163asnfatuh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163krxqjcin.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yzicekao.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163nqpifamq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163lyrrvyfa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163yrafeqyc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163opueinxc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163yvtppjmm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kowcyjkl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ndsvvvvn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jaazsfoy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rgwrdehu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163hxiilfai.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mdkexjgu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rrvowduv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zdwcdxix.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yztabrjk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163odinabtz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bccskzbi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163znqgckrl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rigfbhmf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163itdwbrrd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163avyviqvg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163teaebbfq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163aggxolzx.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163bovrqoyf.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wvwoxzqo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ydlegedf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163urokllli.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163llyjbvmn.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mfbygegv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163lbganduj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vxhfcmoz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qknxonka.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jxtkifvn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mihdebid.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xznytnkb.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zczyqrzl.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163eqgsfbba.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xifhghqz.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lmzugvxg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163akpemyrs.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163fxiqpcqx.html


<!-- 参考信息 -->