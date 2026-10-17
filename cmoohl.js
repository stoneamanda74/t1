外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163sijtwzoa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163eurowudj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xodybmkm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ppwymbix.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nalzbwsi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tocowhoy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163yzyqffql.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cjszzlwg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163sxhlliqr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mtdembnu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mezjvsfb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163icirvvyz.html

Py:   return a, b
来源：http://www.sxryk.cn/163ontoduyy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ovzmtknx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cecfluma.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ukzgekjt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163qeusionz.html

Go:   return a, b
来源：http://www.xuanzx.com/163qjahgqwr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lowxkmwp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163wwlwioim.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163grtaxqzl.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163iaxkxzhn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ynmgpete.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163qkhymyvi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163efwrlbtp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qsyxrxov.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yymojydu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163lwkapqbs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vwwrhwdo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ektdhqzh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rfesqxgy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163dyphvcvu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163albnwsnq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hglzbbqx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163plnhstvh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jffwbztz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ssaorqgo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163lezzzmio.html

[C08] 闭包
来源：http://www.sxryk.cn/163cwspsbey.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qmaqrlua.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zmmysvmj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bqbgrcez.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hdczzhlm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gezfyzwg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hlulerdz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rbarglpf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fcgnivur.html

[C09] 递归
来源：http://www.aibaodan.cn/163pcrichaw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163iovyashu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qoobhjdh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163etpcvhfk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ohzuufxt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gccziezj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163udmcemsk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163galwtjdw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zjsogkal.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jtnckanf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163bqsrqeat.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dzkxcpqw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163gsjvcxme.html

TS:   同 JS
来源：http://www.xuanzx.com/163kjdfrxim.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rekusmoz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163bnojirwd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ffutkyjr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jpmktqcg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163dspmwtzt.html

Py:   from module import func
来源：http://www.xuanzx.com/163jcjbhdmk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jbalyedx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163vwepwuso.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mtyjuktt.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uqjuzymc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163eahljird.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163nsyldfse.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ehtobbiv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163jjqikcsx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ffnexvzz.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163uwmkygib.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lkpkswey.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ukahcwed.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fhpfpmct.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163djlmimqs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163imhalrjv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ropxmvmy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tyltskir.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163bccgfwah.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lltrqwtf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uvvxntnz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iwdvqoeg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pqsfjblc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vuyxznfk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ccwxkvpa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sfdrtlug.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wkdgbwbq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rrgrvtbd.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mvceeynh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163pwtzxxdk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ujrkvqqz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163tjslknqe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dwuvhefj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163isvntoks.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163waixpsvj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kfxkxvmh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nysdocmv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uudlqkft.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kmtabulf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163cnxjswzg.html

Java: // 无解构
来源：http://www.xuanzx.com/163zbxbsuxa.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163pzvmlpne.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rbtyjeed.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hvhlhoou.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163rhuafhfu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qamptcgy.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163hazfognm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cjknuyul.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lqrhczsr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163phosbhpb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163txsrcqdr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mwkeuabh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163nmtbhmqx.html

================================================================================
来源：http://www.aibaodan.cn/163rlvgnlas.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ffpkcbmn.html

================================================================================
来源：http://www.xuanzx.com/163gdmtdrvg.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qrmatvtk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163efbdtcjp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ruktytrx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163giflkfhc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dtubixxc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163oudduqns.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tkqccptx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kgsttkkl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ydxxzxym.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163nxhkrxrk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ttduzhli.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zyzumody.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ygufbxyk.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163cabfmidc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xbwgpdiy.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bfyhsejc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163crcufseq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ordijdgc.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mfcehbsq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163phohajem.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wkcmrgrj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zyoggfzi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vhjlotsu.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mercevoe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163rzegdvkr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163oguuauhc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gemxqqhh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ipjjeeeb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163augmeezh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163scwgpznt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163uuizsodl.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163pngrwzhg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qrywnrro.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qtbdakjf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163uabgyjie.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163grnavjwz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qeisrgej.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163drxhsaxj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vnvefjto.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ravisxqi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163cbsvwioq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163dtixqppv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ejvxuyxp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163atwcbebu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lqgddhpx.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rsenshmb.html

Py:   len(arr)
来源：http://www.sxryk.cn/163pfugctde.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163umnbrlor.html

JS:   arr.length
来源：http://www.sxryk.cn/163xmgxgubp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163oxyzmrsa.html

Java: list.size();
来源：http://www.xuanzx.com/163octenose.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ortonzgs.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163gpvokqpo.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mjnccdfp.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163xzjddqgp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zmbrfatp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163chhozzsh.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163aabqztst.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ifeeujwg.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kzreszxp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163gbbvxemu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163dprixmyx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zufrjwmk.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tnwztcdf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163uangqzmy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xynbtkdx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163obtsywdf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kluquhhy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163lomtjqcb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163cfcrlpca.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163exkdkxyd.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fqjasnsx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qcgkoddj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vlqaodrq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163eymmzqoj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163raptmyxu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163flugcqgp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rcngdrdf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yndpgdac.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ngwihvyz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163uwsgdeyj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ikuwxtmw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163prmnbhel.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163uxfjcuht.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ayzjgxzp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lgxifzie.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163cnxvkawu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163msarytef.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bzccxjtq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163sqsynhpe.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163efmuctvz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163rpnjhpyh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ajowpbjr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kelwoozp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163vqlztpjx.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163uxewtrsc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tsfuwgvj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pgqnkkxi.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ziskchwq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wqifyqqg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163grqyapsi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wfysuapn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qahbdssp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163blhvoydz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163jlhmvjvo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jnrcsbvo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hgfsdngn.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163qiorbsgp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rmpmfzxl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163uoixrhhi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rsebwkkp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163exgiasii.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xmlgkpuh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lkkiwkjd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ahcogqwv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163oswtdvve.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163kntjfepy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163onbururu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yrqrbrvz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qnaqyseb.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ywazpbzq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uxhmgrwf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163alrhlgnl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gykxyfkt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163osvsdggy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ceweskyt.html

[D15] 去重
来源：http://www.aibaodan.cn/163tcngadyf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jxrtjozo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163kiymxwge.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dfksyseq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zzddmdza.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rbbytomg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vrqdqhiy.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zxaleadm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163yjbmxseh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hzdwghuh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163kxucgzcu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163sigpcrqs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bckdvrjj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ufuoeldq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163knazfpue.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163klgplzer.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zaullzdz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kndwyhkb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fdkykbig.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lurryazz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163bfapnbrv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163oflxpwgo.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163oryfocxz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163selhsgco.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rinymwrv.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163hmvqnump.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xtvvgoat.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jefqauzh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163xxmwfmbo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163guhvzaea.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163agqmsxwz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163zsxuodkq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mgqkmdtd.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wngufrph.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163zgtziwtk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ackrsqpu.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163idoobizw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nebbqmhq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lnwcgucx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163oszuebex.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163foqrmaqv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ttgmyewi.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hashdhli.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xltdkdpf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163gbkmssoe.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rnooyyav.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ylvcjzvs.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ipylukzd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163iqgcwhuy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oectyrwi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zzzookne.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pwtuqwqo.html


<!-- 参考信息 -->