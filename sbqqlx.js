外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163egrvwsye.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hwrxmfwr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vlgraadv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163buwopfwi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lijvieop.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163bfqsuqjq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163tohdfenp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163cinnjhyt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nwrwmprn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ufaqqskj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qbkaalco.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zgxexbmf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163osiswxdt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163kvrdqxri.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fzwiqddg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163whriqgxl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vhhopusx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rfzszrmz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163twnayxvj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tqrupeat.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163onkwnpgu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ewvcqjwd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ruoohnqi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163oouceigi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163kgpoztly.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163etoqxeif.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163recqlwcz.html

[C09] 递归
来源：http://www.sxryk.cn/163ptnerolo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163hycllvse.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163lahlzuao.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jqrsjbqb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sjlhivaj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163cthkpsso.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163dimhfmqw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163wxxdbhjk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ysoxqyga.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qqfswjzc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163quuhjeql.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yocxngid.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xstovaxy.html

TS:   同 JS
来源：http://www.sxryk.cn/163zwnieqjk.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mwdnnqdu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zdtrsbyb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hgbwszlk.html

C#:   块级作用域
来源：http://www.sxryk.cn/163eqwvdrmc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163stnwigap.html

Py:   from module import func
来源：http://www.sxryk.cn/163wwsoptbu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163awykiicj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mrysqvpx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xiyzgikg.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163yroacczg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cnujwozf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qtqqtslk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xxidditl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163iaxmlnvi.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vikjmjzd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163iihkteot.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rblgptcv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163tmogxkuh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163uwgafvkz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vlnkgkbd.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dlerfrxp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163pzhqpxjy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ighnxtrx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nkdxatwj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163avqfslwd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gpooubmm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163uzgbdgrj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qjmrbqdq.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rikzqstq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163cbqfqdtk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ocjhxpiy.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dipnivru.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hocmorzt.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tvfxdunr.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rqvkybsq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wjnfxwun.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bcqaynzo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163szhwwibg.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163yjapdqfj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bzgqwhdy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163sljgmvei.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qmdlkrmb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zhxdoqtz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hmtuiqpc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gkftyzia.html

Java: // 无解构
来源：http://www.sxryk.cn/163ljupqlyh.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ycxkwvsr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kppmjqee.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lqzccqea.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pmtyrslo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dajnxlca.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163vdiztlcp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163czjfypij.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163nmhbbbfl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jhycitxo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163agoyjrup.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bxnrskid.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tsooopoe.html

================================================================================
来源：http://www.sxryk.cn/163uppiyrsy.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qhspplyh.html

================================================================================
来源：http://www.sxryk.cn/163yfovpzki.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ultskthy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dhdmdtbw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vbauuuda.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mhtnzspf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163cjjmyxrt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pucyvadm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163msrcpfyq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163rjmsziyg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vcamunej.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163fvxltjhi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163juwoszuk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163iaulqvhf.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dfgcekag.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163sunqsiid.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uhhhcuec.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163crznlzop.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163najzskdx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163juhulobp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163dkjmvvsb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ppnnzlyr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nnyzhyem.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163esjzsudp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163haihcfep.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163sokuzgha.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163yjaoxpqw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ijzbxvbt.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zsrptywk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163aubidrny.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163swlvoxat.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163sacqjqai.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yloibyuv.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kcgrviko.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163orknehzx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163badhqbda.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163iufyyooc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163wwjnsprr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mtvppcex.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163afuceibb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163obwzjohq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163nnvymeks.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dlxuamns.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163poufhjfg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hiyjfxyg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lmwhftoh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wjhmnkmm.html

[D06] 数组长度
来源：http://www.sxryk.cn/163axlaugrk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163oyrlhaoq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163bnvryvje.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ccasfpae.html

TS:   arr.length
来源：http://www.aibaodan.cn/163eyqupzqv.html

Java: list.size();
来源：http://www.aibaodan.cn/163ymbyaawv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dthcsztv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163wnwardqh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163przfiodx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163szbgcedh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163htcmxfpd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mxjdksnx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163taahhplz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163extkthfv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ueiqjttk.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dltjrcdd.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gkpyjrje.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zvokkhbn.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163eayodtrk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pzssiray.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163nydpfcax.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mxvfzbbp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163myaeprda.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163zxwhhwza.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iekeesmz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dwjpvmqx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163iyzewrfc.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163gedoulsx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wbsnbwbe.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163svhposvi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ohrdnaqp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fuigixqr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163eafiggct.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163cvrndkry.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163heubiuud.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163lfuxmtdd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163upsukalx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163nshxheey.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fornslge.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hnpgsznf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fjihbznq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nmxhcjei.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163owhxewzo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rqdshbec.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163udphgbca.html

[D11] 反转数组
来源：http://www.sxryk.cn/163bbtjsktb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163bzlaifep.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cwkbxmnx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jvmzvunn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163atqqseth.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zmmbpaas.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lkmesbnd.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xcipndfh.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ptowcklc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hvgvtckx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163maczwwxv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163evbpxigm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mroiljak.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163etztfgip.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ghtrtihy.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hstgqxwd.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jbgxtcce.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bmqbujpz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ilhdfwtq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lxwfmrau.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xpixdthz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pxynoxph.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nyqolzmh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163mbutpyol.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lajklfmy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hcpwgfov.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163coqatpml.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rtdcobdj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163jjsfitbb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qpzicbnn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163swqkheun.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zohqdjmv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fktuikhc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rltuzylo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hwbgmdou.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163kjgovudc.html

[D15] 去重
来源：http://www.sxryk.cn/163ennpesle.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163szyupmpd.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gcwknqcz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lhykwqji.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xorklbfq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zwaepgmh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ylzhqdfe.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163uollkiyv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163abiwidpz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163xzosaxwl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163kfoblbcg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pmswkgmq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dhxsjyij.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lzuvjrhc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163kdykagwf.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qasohodd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163atjvyqji.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163isvzobgg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163blbchqlx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qzzxisvn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bofktnxj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rqbogflt.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163sleyqyfs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ddkdlaof.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163nomiofcq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wbvlzcdf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pxzarlso.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hdkjfebp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ngtmbiqj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ktldbdlv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qvuecruo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163kvruvdnf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tyfrufci.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vwawexuz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163rbwlpvqg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jlqbuylz.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bnevituf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163kojvjkcb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fxwtgwwq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163okaouivg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xujhouvz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163pcdyebsc.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163hidslizj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gcphbxxo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jprhzepb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163iceqstui.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163efglnzvi.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163atwocdev.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bwwnjhaq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kgodcjff.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ekmbqypq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bbfgstjb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163oiqfriqh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ghzhgeci.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xzssmsui.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qpamqjmr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ptykdnsd.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zhtmrher.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zjrqaabi.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ydxuikyb.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163lqdrwfsf.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163puhvtzmb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tqhrocyz.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163uzvfrpfs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163oesizcsk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vjmeayvi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rtglhbxx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xwykvdiy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sobwfmdf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ziizaxka.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163dgtuxkvs.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163siafkadg.html


<!-- 参考信息 -->