外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vjtwuarl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163howbrptb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hfdzatbu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fbqvwgdq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jngaeahx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mahcibxl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163anwneetj.html

[C09] 递归
来源：http://www.sxryk.cn/163cdlscjwt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cmhgonil.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163foiuzgdl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mdybcgvt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zrajgzpp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163yegsadhi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ebltwaxb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jpgtzufh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ggubgsbv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lzkzaoxr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mxyarnbl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vblfpvai.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163poxgdgng.html

TS:   同 JS
来源：http://www.sxryk.cn/163yzzswmgh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163phhhkuzj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rvwwzicc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163btzfurqp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163egaiokxq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163klvohidh.html

Py:   from module import func
来源：http://www.aibaodan.cn/163aekontpm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163wmyzopct.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mzmskeed.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163laoyybvv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mpapmxph.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163myehruzf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ytjblyxc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ltwkwkmi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163nhmnosjq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mrrozvsw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163prsnfpok.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ectanjmg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ittzpiou.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wdnwqlxo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qvnnwjnr.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qvxpoexc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vtmpstnp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fyfjeqzs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163gcycclog.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tspzusgh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163bhhgkpax.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tcjqveeh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jnfqspat.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zsqnnpmc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wjaxuhdq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sawkslby.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163rsabkgwg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zmjymquq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163okqciucg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163fufrcbhv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163bxqpzgum.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ubpzryqc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163korxjflf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163utlzoiep.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163freuvtfh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vvxvrxsr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gluwuajh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163cfcuklnc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xuuxpofp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163dpdjykcg.html

Java: // 无解构
来源：http://www.xuanzx.com/163tykkyjca.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rtxoaoia.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wequtwke.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ojpicddt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ecicdlgn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mnabnhxj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zzibwdti.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wyybtjsb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xbgupbfz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zfavwzzo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jxipcjrb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hovbunuf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163czjppcou.html

================================================================================
来源：http://www.sxryk.cn/163rshawgeu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ntihhokp.html

================================================================================
来源：http://www.xuanzx.com/163gnwfzvsa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163toybfaws.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lnevzctl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rljtstvj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163llixljsz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yqldkcbl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qxhwlple.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dfkobolg.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ydgxryrx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163skbwdyhs.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dsibodfs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163izqsuokn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163sjyrvgce.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wzfdlwzt.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163cqoksaqv.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tzpdqedo.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163mqrljvzd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163atqaltxq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xduzprto.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gjydrpai.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gatgcjwo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gaoroprx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163acdfjpir.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hysdjoap.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vywugdtv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hbpdwveu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163degpqdop.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163spyvwaev.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jauzjyfn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163cucvuirw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rmkbcude.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163lejgeita.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rqsflfoa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jkpsgsuh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163plusskik.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163saughavo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163boqcgoqn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xqmzkpax.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vpudsmmi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zjqhmmyp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163uddaxdct.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lgabemgp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hjwcxmtv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bdjumfnc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xufhmgwg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163chdlefdd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zfndfpcu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163chjrwize.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163uitseklb.html

JS:   arr.length
来源：http://www.aibaodan.cn/163awxrtbyk.html

TS:   arr.length
来源：http://www.xuanzx.com/163iqxbzgwm.html

Java: list.size();
来源：http://www.xuanzx.com/163djedkisw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163sekwbvxj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ignbptjm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163bvzoytie.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zpynrktt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163foykieel.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163szmmgini.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bvjivthy.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wotxjitp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ybgdenma.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jsnalavs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qrzuudek.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ptxqfnqb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xpzgyche.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ikqmdzta.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163hootibgp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163yamgmtxp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163wioawvvj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163yezlplyi.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163njvbdpbt.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ntxwtxnp.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bruazsax.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ibgqserw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bskisuvb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bemxyeld.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wlwmdddr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163uobfdvdl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163npbcesfb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163wedumtwi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163glyxsuqr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hvgcnrtm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163avozsqzz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mfmuhvqj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163nmbqaqmt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cnjgbeea.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mrpsugzc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yieczmku.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163eatvajaw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163khbsoqtm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jovlprmm.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ewssscgj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163iqulovlx.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ibiworcm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163yngglxll.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jllohphl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163fmntprxc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ubyjilpg.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ohkdpvsz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163frdapzcg.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163slishnxy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163lpgvwosj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163owcixmqw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ytnhoupb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ayzyarxj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163epcoodfq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ehmirvvh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163alwcfbmk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163yiwhqmiq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xgltmdwh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163whvyuvfs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nyxcfflf.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vgwynsxt.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fqbjxomp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163wgkdhmmj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kzavuybv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163chkmadry.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163iuucpuag.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bulnfgpd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yhpjjshg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163aebvleoq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nhnttqlm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wugvupqi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163veovprbz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uykbpwyc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163powmeliz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163eabxnjfx.html

[D15] 去重
来源：http://www.xuanzx.com/163xlyyakva.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163drlaclqz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163iguaiuie.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mplpmtsd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bqlvwebf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163lqfdcctd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163sgxggegw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ioutixyn.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163psgajbal.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zgjtsjfs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163lmyfbakq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163mlsicfoj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mwlkfklx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ywazxcsh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fzjdlgth.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pnnfpbcj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hjxgxwre.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163miiewqxx.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163eemuffhr.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fdvyvlav.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163boxhzgwg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xumkvbpc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ewviadnr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cvolibuk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yxkloytr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163zbievafn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163nbtjsxyr.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163kluoifvh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163brcyzztm.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qljppcpn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163kxblxbwu.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zkbmrshc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ivdvkxut.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xfcpiddk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tuzlmqdk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tpuwmkgk.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uwigpygk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ckzldxnz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163caxgabwt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ryubbftr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ihnyaxnt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163exefcxsw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rhytfanr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jodfobqz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ifvyhuou.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ynmioybm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163sloxsjlf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hxmgkuix.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ynmhorah.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163odlyrcao.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163shcnorij.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163egrmfiys.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163igqwnqjt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qifnqqri.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163eizdxjwc.html

Py:   x in arr
来源：http://www.xuanzx.com/163bmawoqiu.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163slvezysv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ythgfjvf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163pcsilfra.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cbjocjfe.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163bwbnfdqo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gxgmjkra.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nnayuwfl.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ctynyfzb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163whvvguvt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rjsotzxe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vqkqhtjc.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163nfpxfayk.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163scwvntoe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163beogpwsp.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zvouoguu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zrmchigv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jyphnmwq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uirifttx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rdonsrrp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163aszzktxe.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163auizlncx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wnacnpja.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dgewhuor.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hxmezerj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jzwlzzjb.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rojcjsny.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dcsmaeaw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ilnmbmjl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fldwnihu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163njwciaqg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163uraajcex.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wnvfgfqn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rnevihih.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tdyldaom.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163zjmmhqhz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ojyafctt.html


<!-- 参考信息 -->