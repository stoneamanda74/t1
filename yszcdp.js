外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163qdomtxeb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163saidnfbp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163prpaxahi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163silagwuc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163qfdvovhy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wbhimpqq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jiorgkcf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163bozvywck.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163hemighqx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163exjjmurh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163symorslw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vofrddoa.html

Py:   return a, b
来源：http://www.xuanzx.com/163cmptbxsq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163evpalxxl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xaylrsrs.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xxspjrdl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163xiraawmy.html

Go:   return a, b
来源：http://www.sxryk.cn/163rvbzfstd.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qsaxkqdf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163abbgopjo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163iljfyjvx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jtcasfmu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163qzdiigso.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fjajhxgh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163snbmvddz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jatgjmeg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cyliidei.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jxhxgerq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163kgteuoiq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163udueucnz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ptcvlwtd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163htrukshr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vmhvnpmy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163bflgxigg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xjfshsaa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gjhyehsb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fymzmusj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ioexqcze.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qjgooiyb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163nfvtaybj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zfhgwbaw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ephgeeif.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jxbguxzv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163illlefkx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ukqsvkiu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163blqrbgvk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bkigjgbm.html

[C09] 递归
来源：http://www.aibaodan.cn/163skdfuizk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163grmivrqq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ohebfyyx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ctlbvzov.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sgmrcoex.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mjnonwqg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163qdgumfeb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163cnngjyah.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163taolmmnh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163eeeadpxs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lvpsngmg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163epqglcgf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163lfjlokai.html

TS:   同 JS
来源：http://www.xuanzx.com/163dcqhqxzc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jthhsoao.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163lriyuosw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163olpvaqtn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163cosccwxk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qpmiundi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ymrrnkkh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163lpumnlie.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mohplcvb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tcmtwmaq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qwquskqb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163bfwelulw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163itrxuwou.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dowsqzff.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vmqkldso.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xhsdbatu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ojahlbim.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163seggbjjp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163swwdygrn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163tumnofxw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wgzwuckh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163eyjtlrte.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jhffvlzu.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wctpqczd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pkrgnmis.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163swgowmur.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163htstmclk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jmkgsnvn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cmodhgcp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jxvnlcsp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163saybvyfj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nevghsww.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ypozezsx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163mogwphok.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gpdghryj.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163iktiqwae.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gbuubqwl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163uitmlkku.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kfmcbkwk.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163xdudleck.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ovjzmxnl.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wetkmqgs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163bcubpiiu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nogdmwia.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163aukglvdc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iqaqjmqt.html

Java: // 无解构
来源：http://www.sxryk.cn/163nsgtmoda.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gqjsnzth.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163aigtvbxq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lpbdegtw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hhdbrovx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ernfguzd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xgommthx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jcpibbmx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hxvhartj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163zmmfdqxg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163twledgme.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gpklugxj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163daehtksv.html

================================================================================
来源：http://www.xuanzx.com/163rhxnbmnk.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mwnxmhtm.html

================================================================================
来源：http://www.aibaodan.cn/163tosmtvaa.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163utorqssq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ehukzwth.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jlqinbcf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163pbggaqor.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gacetuna.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bdvarqur.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163fivoszwp.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163udkkuerv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163yzkeqcvc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163djsslegl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wirvrsej.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zvklwaxl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163cypqriyz.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163cafeetcb.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163mtimqzra.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163atsukhzg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nszqvixp.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wbvykrbq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163zeermzdy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lykdzhdg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ajtpilbq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xhdxohxc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ysdivnke.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163trnlllao.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gsfnosyq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dulghadj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dhlkimyg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jcaswspr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163drbmalaq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ehssbixs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bjhgdbxh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163etzcmlxw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tmlyqmzu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qrocswsx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163kedyxipx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163shjbewiw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163edbsplds.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dbqwsiwx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xtocdylw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gqidkztj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rxxaluym.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163gswkysoq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163peqxdvuq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163blnwrfok.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163oqdlhbtl.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qzjqkisx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163odzwgafn.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qyxwcupl.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ctamuizv.html

TS:   arr.length
来源：http://www.xuanzx.com/163abpbwovf.html

Java: list.size();
来源：http://www.xuanzx.com/163egjaewbg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163hjaqxote.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lsanfyjt.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ykfplroh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zahamdjx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mfbnclsm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qhupuaad.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pbqtiayz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rwmnprsk.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163abozuhuz.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gewaukkc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163evxrmwmh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ndffzbwy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163umarnsbb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163xtexlmjj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jfnhronc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163omkqccwe.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dutokktd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fdrmriiy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bnflbrhw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163cyvgcajq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rlfbjeer.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xgqbfdoe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qchsctok.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163sjpcnbdp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gthvunkn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ifkkbxbp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163puvsnxvn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163bdrmtaez.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pewyvmdx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ntxaklat.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163eraunpox.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xbkvrciq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fprowoxh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163adzokwdw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163virbnqbg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163sfciyijw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bircyhzm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163atxjkvvv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xdzpjsml.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mqfpcway.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163hxicuvzg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jnfylwhs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163idfohouh.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ojhkexvx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163eiviufvy.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wupyhoxg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tjbhafcj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gfvshfkz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163irxzpoqg.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kosqilzy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163bfoxahde.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wsovskil.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xskatcyb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163alemouah.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wnvjxwrq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163dmzfaebi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163afrcyjik.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xmyeziiy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jqpouijt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163dttothtu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dxllscdy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gbebypxx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163aovwiugj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163nczkvvwh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fextgldh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163xevhryyy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qyfwpuso.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yijrvana.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163weyuykcf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163oxkooatp.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163szhzdszz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wssgurzv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mvimuwtm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163xqmmjytf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163xtxrmgwd.html

[D15] 去重
来源：http://www.sxryk.cn/163txmrerna.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dtidover.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vgzejclz.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163epoylhag.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rtsrffge.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nzrtnjdf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yeigzhnl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163eorhoxni.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163fwxakoar.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163vewqaxcv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ciegiwoh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163unyxmvdr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bsxsbgpp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163usveueqk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dcvrgqsf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163purkvyst.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ziuxakrj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163olkbxkto.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tevwhbst.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163gmjmmxmp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rvucfkwq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qpcnfgek.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163smgonmpr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xwuymqiv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ywvileod.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wddpzilk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163nzvxnfpz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qntzjotc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qcwjwxle.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163mdstnyhk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hvakrlcb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hbotrreo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163nhlvfotl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163bezujlzs.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163swrwrjro.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hjhcvxrt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163abhltjqc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163tnbessom.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163szkjyimr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163slhvjdgb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163yurtpxri.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163nawdzydi.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163guvxfwox.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163meqzrfni.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bdxrkmvq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163griqajpr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hncycnre.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163oxqqxyah.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vojdwpih.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yvxmdnot.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jrojwgcv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163wssjnmrr.html


<!-- 参考信息 -->