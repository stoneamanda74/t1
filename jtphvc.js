外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nfmahdfd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tojyutwz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163cejdxnhl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163fceqtrfs.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163laclmwkx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163clqqouzu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ywxrqcec.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gcnrkvnm.html

Py:   return a, b
来源：http://www.sxryk.cn/163xefcfsxw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163yizvunrc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qhzqjsss.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hbkjrqst.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163cghpnzlt.html

Go:   return a, b
来源：http://www.sxryk.cn/163facsqbuk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vayuroow.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163smvfquxh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bzzejwdq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163apxjmomu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zsvulotk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163gdqummmh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163lylyqteo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163btolbrsw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bwcqwqwz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163sgvuhhiq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tsqkyitl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sohczcat.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163prxnhnkc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jozwbdhi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hqugyirz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nfgzdfxs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163mvwhhmva.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163diejxoas.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163bonfjfen.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163harvdfep.html

[C08] 闭包
来源：http://www.xuanzx.com/163cwuaxfsf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163abwcourn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163heswydoc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163stcbxfih.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zebhuiqj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pwmshnqc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163rcvawwvu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mvpwvhxv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mjwhxwct.html

[C09] 递归
来源：http://www.xuanzx.com/163rbtyylee.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bklikquh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ylcbeduw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ghexjurw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yyleooso.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mobflygw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163huniufjl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qohbzjbd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163fsopsgqs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163piiewbzb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163euigltoj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xpwgzwdh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rudarxfz.html

TS:   同 JS
来源：http://www.sxryk.cn/163yoatemyq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fwynoakl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163vsqqhzxl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163enxmgros.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163tuvbjlxz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ajebcdrg.html

Py:   from module import func
来源：http://www.xuanzx.com/163cpmothbt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ekuvylwf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lelhedbg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xrzomxho.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tpwtjedy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vihtriqb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lcncovgi.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qajfzxjq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163muvyvnfg.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163shzazilv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ipgyqktr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gulmhiki.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dnnrgslf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fqyjhcsi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nzrtrled.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xcpnwqcn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mxqnppax.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xktqjieu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163srfotmve.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dmbpjqwj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ypxxwxje.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163upeyowqg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dhodqxlr.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bwtiokpd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jorpiuou.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163eazilrpf.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163khunuqaa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mjjfugxv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163sucxxyqi.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xrvzwqku.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pfauyoli.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163iubdohgm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kkgivbvo.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mtdqqwjd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ovtovvvs.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ogapncfu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163fmoxfmeu.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gqgstiro.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ialimupo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163oyorxklg.html

Java: // 无解构
来源：http://www.xuanzx.com/163avjboary.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163oubkdwud.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163twzuwkus.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hcstifwb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163lysgavkw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kxbodakr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hacbmhny.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jthhqopb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tfhgvvbh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163buhfjhzk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163opwxzuob.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gypxphjg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163hwvjhpsb.html

================================================================================
来源：http://www.sxryk.cn/163aklhnuuu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sfanrxtm.html

================================================================================
来源：http://www.aibaodan.cn/163maqdmgde.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cqdlvcoh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yqmhzunj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ikmcfnej.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163teotfzai.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163wqlodbmp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163sawpkzoe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vscslcwd.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wacsfanp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ojzqapzr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163diiostyo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163oawlrwbq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163eurhlmwk.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163seohrzjd.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163twjuzvtp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163czacobrh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163xbikkbfa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163snwoelmj.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163uydhfdga.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nbmyhxvm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163obuahold.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jwqmjhkz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zhgktzqu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163dwkbviex.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ddvxrupr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163aatyzhdz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pcqwbbbr.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ikstqehw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163rynztudt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hckuvxds.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nmysbgdk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163retctnap.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wkluweic.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163uuzltmcr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163wtdvxwfg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yfjnmavt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hjrrkccr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vlqbbntk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ovovvawt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yuxwiumz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163uuknsjxb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hsgkcuzz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163zvfymohv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wlxwqgra.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yfifpvif.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hgjjqtlp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163scymjgab.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163lfktbosa.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163lzwypuzt.html

JS:   arr.length
来源：http://www.xuanzx.com/163htxlzevx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qnajasic.html

Java: list.size();
来源：http://www.xuanzx.com/163bbqovfdy.html

Go:   len(arr)
来源：http://www.xuanzx.com/163nvlmbokx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dogxvzzq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bouzdhlw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163duiydgub.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163emlkbmdn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vnpniaej.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yjusxwyp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qyzelylh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163aedcwixk.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xxixgczh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dpzkqpuv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pwiciqhv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163excugxld.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163udkqeidu.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163uchjimml.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qvdgsucb.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fgizjlgx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wzyoywdo.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163lvbzlwbn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163megxcdhr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163itsoarex.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163uodmxcup.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jkppljri.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163tjkznyem.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163aijussth.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163haulpwry.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vewrfksi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163optvbnbu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ppatpofd.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dzgiqbpg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mswtlzrq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ttikyobm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163upkntiww.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xdtsmncy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nhqfvtlr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163esklanvm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163zvhtlhnp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163jxjxudaq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163taohxedq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qvvlxzpe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163fxlldijh.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163yntpepxf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ixdbxdtk.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163cficaonh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163azhexmhz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tryxyxlm.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nfbdpqea.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163mnqabldp.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vrkxydtr.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163sisctewo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kpftkezk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gddnylsc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lcpquglh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jixxawla.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bdafbpez.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lcqdfjhi.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ljcslhgz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ehdwsbfv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163uhbnravc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163uboyeugl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yeblcxqe.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ldclneyo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163cfceuodx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163smdzpxcv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ttbmmpis.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zzvndczh.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rhxrxhtb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ntajycmv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zhkexfqi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mexeespd.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nipooyax.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163gpypojwq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163oimadkna.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163kaornxns.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xmzbhnri.html

[D15] 去重
来源：http://www.aibaodan.cn/163lfuiunwf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dnncnfnr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163yorgtaoi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ajqeemwo.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cthxwtwj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163euubvffg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163sbhrlsjr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163yfehfvxr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bqtnlquv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163akfplmzo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rwflasqv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163gufkxfly.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jfciiwup.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gpnctlsq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163gwmhvtaz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163iaxmmpek.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163balllzpr.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ynaxkaev.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163whnggviz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163oebbeocs.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kounhggi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163evqcgfsj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163thwuhrbv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163rtsjcxzx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163krehfczi.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163czwzoynq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vcltqzqs.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wjcmcbxp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ekzqbwfa.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163burhlrkh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tdzbmqbj.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jmzriwxp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ofwxnyer.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lotosytd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163zmhfqmiu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163otmepnhv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163pmieznaj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163grinvwln.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163tvpsxnwn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mzzskept.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163klpfhbcx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ekqgjfiw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163fphilcsl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pjjxlmnh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163qnxoczll.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163swbdgior.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xqawszbm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163uzowxczd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tzrqjxmc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hgqfpedm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163lvyaojgj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163grlufblt.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163atskwncc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mtgnpnkw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yavznqbp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pgxnjnur.html


<!-- 参考信息 -->