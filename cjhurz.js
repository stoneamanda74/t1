外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kicajmnl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163idkjjdjh.html

[C08] 闭包
来源：http://www.sxryk.cn/163qmfhffcf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rexnrqpu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mdavtzgn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163baqcigmm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163puyijrgy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ziieople.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ibjlbtfs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ivspaloc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hjjxfvcs.html

[C09] 递归
来源：http://www.xuanzx.com/163cgvokdav.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163nbaxdurr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xhhbvfee.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fsvlsmst.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163uzgdbcyb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kgjwyvvb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163rrklgnxy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163awozktdz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163neveeynw.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163yhhkrmbn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jjoxommt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163eahorfmv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163buiixoii.html

TS:   同 JS
来源：http://www.xuanzx.com/163qcmkxtuz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ednqrdtz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163lyxtuvtq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jjtzxcne.html

C#:   块级作用域
来源：http://www.sxryk.cn/163cjdeuave.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163jaxuornc.html

Py:   from module import func
来源：http://www.sxryk.cn/163vxtwigpd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163umafyvgd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lxutamhj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163gqqspkkn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ywvrgwwm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mehzwxvu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163uyvypmyu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163khmtvskp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163syrwbiop.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vtrlxenn.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qpcrgmxk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ybzwqjmi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jfvxtveb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163muyjmbrg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qzkhjndg.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163nbkhdbum.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ozejnfhw.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hbfdenqu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dodzlizu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sojwrntf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163bjqxffpz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163powrhfpc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kyvmnini.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fngltzlt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163proyneiz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163sxyzrmsx.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163hkpojjpd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jthyflkx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wzneekya.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zfqpkckh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163botchktp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163xayjosxf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rqnjewjj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gwzjqypl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ckiuqiab.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mnxttpjg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gesrcygl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bhirjdid.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yiimzatc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163athurerg.html

Java: // 无解构
来源：http://www.sxryk.cn/163wvwcuqse.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hxiqxual.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vwteanfe.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vpcxjgfn.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163mzvctkvn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cswvficy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vkstbftj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163qkyrpdrm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fkebnkxf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ydpucsgf.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pfokqekm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163yzgmgdgb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163njmcuswu.html

================================================================================
来源：http://www.sxryk.cn/163rzpjpcna.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jowxslns.html

================================================================================
来源：http://www.xuanzx.com/163jyzvluvb.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vhctaiwu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163moxhvsga.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vaxbdcar.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ttnlxprd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dbndufnm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163vruaabsb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163jybgcvdb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ejjcwfcu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163bmhrbdio.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ijyuxucx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163waojtvmp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qxpvvjmn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163kvkdrank.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zdqimyff.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ulguuyet.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ajxdajry.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wskwbmwh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ekddwyie.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kmwagjln.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163knupnrrw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ykzunhka.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163pxyeznhb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lfirhfty.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163chuiopkc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gurpcbov.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163glfmilhh.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ezxsjxql.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163omuipqih.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ummahcnh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163borqctsj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vusqjszj.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163kycfheww.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mambwzwo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163bhknmgzm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163stgxpems.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163eonctqff.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163rahwkzxv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dvaujxne.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163tumvxzto.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163pvmtqela.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163cwklmpws.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163noyuypbi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hbptbvgh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nwdbozrn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163zboaddzr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163uowdyvdq.html

Py:   len(arr)
来源：http://www.sxryk.cn/163zvleuzei.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163neionfed.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ztbpqzln.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ypvvmkcq.html

Java: list.size();
来源：http://www.sxryk.cn/163rorhtuui.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163opgjvhrf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163dgxkdeay.html

C#:   list.Count;
来源：http://www.sxryk.cn/163fpxzdiwn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ahsbktbk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163burmizft.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ukdjqvsy.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163paynsyry.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mktrtzai.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163uuaeqsyy.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163aucyxaks.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kdtfpkvw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163snycyyyw.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wscwdydg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qfuzlzbv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163vssgzglh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163knldwbwc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bndcwrpw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163szjikskr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bakskzdc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163msaiigbf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tokdnuog.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ahqyceyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wxiphgnk.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nwtctraa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163izrnnqcp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163crrskxlz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jksrxuaw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163llzyejju.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rlukdsnb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hxzyqsgp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ktxmlpcb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163tpvlkwes.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wnmlbjpx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163utlmjian.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jixtfaqd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mwbpmuir.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mtqhnwhz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xflhyjhi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163mehagxjd.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tksfcjbn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zjdqffxn.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163vrmocjot.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ctqxfkfb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bbkndfkg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rfeywibk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163srfennfm.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163stmmsetp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163cebdlawt.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163oocdmief.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163zuwigijh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wjertnfi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163aucdhbox.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lcbraocu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vuatcnqe.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kviygwzv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163nktcpcuj.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wmserhdt.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rdwaufxg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163pnbzrkgg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163exyypkiz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yoemamkm.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163purlgzlv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jphramks.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xvzhbjet.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163utkqtdne.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163fdsezxhk.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hwrmdbmm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163fdomasmt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163iflqgxvn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fvycndtm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163whyskejc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qylgmsws.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hkvesgnf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hvxctxju.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cxnhnbph.html

[D15] 去重
来源：http://www.aibaodan.cn/163nrtxttvd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163npmfriez.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163zetvqacw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vzvwflnl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fndvatrv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rcxuojpj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163rojphjoe.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vwtowubf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bvoztrhh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163gevmeqyy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163kzffwgqu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xvbrfisa.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pczxcnwq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xfdgemcu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ocsfmugb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wlpmjlgm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qcoexzpi.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163punrylnp.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yxrbvqfi.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tnknszjq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163kgtljsri.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pjmxgcga.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163huebegpx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163egyfywuw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163unbicdxa.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gwlvtqss.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vftbtwxb.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xqwjjese.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163dyfcgkqf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bfidzwxu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pwmjpzbp.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qdfuwhfw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vcxfrmlh.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ykxvduwd.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ywxuevay.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163drkyuhmb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ysgetrlv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tvqogrzr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yzaoautu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nvqyhtvz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163beirfvte.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tpcsjroa.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gqhhozox.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gvwjnpyw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163orcgwabm.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163djcrlnvr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163vefkeyjg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ihglfivi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ihgnvvjl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pbenvsnz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163viqoqvbc.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163hxtdgxci.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rtldvijy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163gcsnzokb.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ynetkrle.html

Py:   x in arr
来源：http://www.sxryk.cn/163yxubxrqq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fmahuiiq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ozvsacih.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dwgqtlhl.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ytelftbp.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hbswmmjd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163olestxby.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fjklaafv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163buugnjew.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ghpqpruz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163slphmtcs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lnkrozyf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wjnvcizl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163capkfqsu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163nivfopme.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vfyzesml.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163iwkunpwa.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wfrbuodn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zfkrjrvt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vhusywui.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lbaktaxp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163afmpzkdm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163udfxfaez.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163leeycxfi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pblvxfzj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yeeepuwe.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163uorlxali.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163chhpbtdf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vqmtvgym.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163etpudtwj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gkqprqml.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kzjhpyer.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hekqowkj.html


<!-- 参考信息 -->