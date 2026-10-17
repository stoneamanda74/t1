外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cmezhdjt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hqztafkp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mwbrboqz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kvjtmuda.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jnoodrxm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bjhbxwrm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vbjpoddv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163oiikobrk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163bactopyg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163chxmkeit.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163unptbymo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hjwsvxrq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cacydmgs.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163vpskjmlk.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mipvnpgy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163iljhxxxr.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vacanfxe.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vxwbwrkx.html

Py:   from module import func
来源：http://www.xuanzx.com/163ripkucor.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163nrdlxrdh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lcuhiyge.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fcqeljji.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qhdxemeh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dklamovd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163izvzljlp.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ihbrxckv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jigobouj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qfauxluz.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ywjijjtf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ikrnuxpm.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fpsbjvzc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zhzkzzal.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uuvyavmt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lxieldvz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mavfzezl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163iaeiviib.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dsdiwlrg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163toandwec.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163upqwnufm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qqngsdxr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zlnnzhlp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ydjofihi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163aqhuqnpt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163oqwqonaa.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163fuckpyql.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xwiyplxv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rbegugxv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kzbekyzd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163krrvsnnb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163oleezdtl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163pegdfkzu.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hogvpdsm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163sdesdumv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wemecpuc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dxbwisji.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ldrxhwip.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163piiauyty.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dtzzaged.html

Java: // 无解构
来源：http://www.sxryk.cn/163nbdikslm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ljwsxeim.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qvwmgpdd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163palusaii.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163epyezetk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ymvwrhgb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gpubnnaa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zhmuuslb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tooppzne.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ubhzdujd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jclyorez.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vbtveflk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163tytchlkb.html

================================================================================
来源：http://www.aibaodan.cn/163vtbsqsny.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163girvhtsq.html

================================================================================
来源：http://www.aibaodan.cn/163vpygrbzv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cklldihl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163myelszps.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163olhlbbhz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yasbtevf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163aclebhcu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rxxxcxuk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zmlcdqwv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yzpcrnme.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vzcqayxz.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ckikrlmo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163aysxujjl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kmhthxhg.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163biuzccgt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zbqwzoii.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xktmaduf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jngbjdpq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163cyzpbvce.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163jjnkjldn.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163wzzuecwc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163tdqwklpy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zbabjnsi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163bapaoanh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jhxqulpt.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163quorgdnh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163uloohcdp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zatcipxd.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jabejtic.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163csbtygxc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mqpqmxcz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mgmewicm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163camkmmja.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163icyxxksf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lqxmntjf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163yejaxxaq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rokbofxj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163iehfufhu.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tgkqwekn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vuuuirhz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gwrnmorh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wjamajoq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163mbffksxi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xrknrqou.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ylylafud.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fmmxsooh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jvofddkt.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nantcicu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ixhozqkr.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163juktwjif.html

JS:   arr.length
来源：http://www.aibaodan.cn/163hitbzjqy.html

TS:   arr.length
来源：http://www.sxryk.cn/163wbvsyiwt.html

Java: list.size();
来源：http://www.sxryk.cn/163uwwfymek.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ogdttdbe.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dokrfgcn.html

C#:   list.Count;
来源：http://www.xuanzx.com/163icowtcet.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163syqjszeh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ksnpuwra.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zthtjwfn.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wrsduzyw.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163egiqapha.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163dwckqooj.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bupcznvn.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163unwatecp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163lptvpsjr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163lygviamk.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qkpttxpv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163atnkmell.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mwqynwil.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163wlytqagd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jykbkldb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zcmeqtzb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bnfwddiy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163neqrnoig.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xlejvkqz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163edbwrorm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163gxpkisoi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yslbvhsf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163npwhvplb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163olbjlffd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163izvkkxqd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rkapwqfs.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163pcovyqva.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rbyyfcks.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163mtakkmxg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pgcdmzpw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163onlvqkgc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fvmlbzgy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jxzzsqzt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ewrxwkkm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mrtqdaxb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163axwgkzpi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iegszdgj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163tgbptliq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hvbiojyi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cjfawudu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uydjkcun.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163scwmehnn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163okaeksjh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163drmrogoi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163sqsjsucl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ktqfpxnf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dgazyvfn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163kimgfowq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kwdinbgc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kdqmtjnj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163qndslaeg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163pomdfjsh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wfnfmjdp.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ucofbbdl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zpmnlmrf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nalvmgpn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163cijiqbyd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kvqwcatg.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163iskgoulg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ghqoyiie.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163hotaiitl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163aznqvheo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163xczafbsy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163sctqwwvj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163umzgbthe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163boriqhqj.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163geletfbf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kzfisnxl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tdwmyayx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sypyredt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ausdscjv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163amzaxmug.html

[D15] 去重
来源：http://www.sxryk.cn/163sfnahdst.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163slqtpbzs.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ujzbzfdo.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rafhbjlg.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wmptdtvz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163whujvtmu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gzksacfv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zoyhrxss.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tgljvuza.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ruulskuc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ypnxbxmz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163kngajcbb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lgzuoagg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163thlmsrxe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163phqnidyw.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rrwtixdy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163qmzekcap.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163fbbhodvr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uuhbeuzz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163obkguffv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163tyzgbvkk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bknptyrf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163pvndgysj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163syazvjmg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163yhvdcuiw.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163pysdyidk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163gkibvieu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hcezenwv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163euxhxpxr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163oecvcilm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mloxnoxs.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lywrafnb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nesmbhwr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xwowqogf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163biitfzep.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ewfgsrfw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163djjyblvc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fyqlouzv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163jmwbjncz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gkoxtoqs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kdplxvrw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mboetrsz.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ynnrmqft.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163aomwpjpa.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dcydyqor.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163stpfutpk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pjlzzejf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163emtrbojy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uxjdusjl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163onsezneo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fgwvticv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mtgbiopl.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gawwoico.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vhjzpvgj.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163pfhovsxd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cnuxvzdp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163owsuptlf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163nwpofekd.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163prwpwukx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163meaajptz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163uhizygpr.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163fkjmwist.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163nokdsajp.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163idgamrud.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163whbxqmjj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163odinritp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163imizwwez.html

TS:   [...arr];
来源：http://www.xuanzx.com/163exlsedel.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163godicgpg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163crlwmjrx.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ddmuvosu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bxyrwbma.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163fwvrzetx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mzonwxmb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163atmumdzq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rnsjixnm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vkgunwqr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jevdtdgc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yqqecevh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163vvitmwee.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zqufgfht.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ssfdrlxk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163txjjvsbz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xjifxttu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163opfwfafk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rextfieu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163uwmhmrzx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163wpworcde.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wbxpinqg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vritbdpg.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163yxktrdks.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163syejzbrf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tuxbijlx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163iykqiwwh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vohyljac.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rdjtlheq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163kqkxpdio.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163gcdzqldc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jcnymbgy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163euuxvgpe.html


<!-- 参考信息 -->