外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163illmhggp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163sntzfklq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163qpwxwmwo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163wtzltotl.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163kjqjbziu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ehgebadz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vetcimfb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wdlkhgvx.html

TS:   同 JS
来源：http://www.sxryk.cn/163ftrhkkbg.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163edzskjls.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163oazmyupn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163xorrycxb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zsxstphq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163pgdokdjm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rlnnexgk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163xqhrgpdx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mhaqnivv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mpzhhxov.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lipirczi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163eaedqlcu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163fjfukjhj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jeclyuan.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rqhqeawh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xfsvtmid.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163yqocurwe.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163aazcwttt.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ygjncwfn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bgjnwalz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163qqoucyaw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ueoyibpr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mhgkoeip.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163apegtvdq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163qhpalfwq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163twbrldmo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tttyiqhs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cnatacas.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163juwifvux.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163kmcisdnx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xyxrqasc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163eqnupquz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ccchayqo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163lnvsfvpm.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gfjjlwgr.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mauaaeqm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163osykxxhd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163etzvnygi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163bqocxggn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qhydsijw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kelozorb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zufknkae.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wlmmrrth.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mfxxrchc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yksfyebv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163zbpitlej.html

Java: // 无解构
来源：http://www.aibaodan.cn/163wqoprfta.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fwolrgaz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yrakjfht.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lsiahjqp.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yvorirfr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dcwrsqfp.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ogashgko.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163tkfkaruu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nfmfnoie.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163yyryvjap.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163sxsuejgi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163npzafljp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sbrdyisk.html

================================================================================
来源：http://www.sxryk.cn/163yaukjkgn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163nhqywofg.html

================================================================================
来源：http://www.xuanzx.com/163qwyuaqrt.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163vqsyxpll.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qqteqssa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163drjwxssb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163xvxiwggc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gsqxjxdy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rezxrhlp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rzyciyhn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ushzimik.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163nqwufint.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163liqxonwp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163erbgxokf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kshvexnf.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163hkmnmtwc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163hrvymqds.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ijjpydle.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sjyvstqs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163brfmytxy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wawipoqp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ijpljlcg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dgrqwykv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pzbdyvtx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163pkbrljdw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wzwtgope.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jthupitl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163bjurymtq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bizelbnb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xkdwmhdx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163aztoanho.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fhkizohh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163oygqrftg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163nqrrobwb.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ckbwowdm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163oszaqjgq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zlwozqbg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163swtqvhoj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tjynlhsl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163iamhzqsl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qyqhjteg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163dpinzcgm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jovrxjdk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qshynqiv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ngypoeig.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xtnmuvyn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qzsujmwa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163uauxzqdk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163yegjsdic.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gurqfbfo.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cxtjjgmj.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jgvzgzoc.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mjafxoob.html

Java: list.size();
来源：http://www.sxryk.cn/163ihyocane.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nvqchldl.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163alriigno.html

C#:   list.Count;
来源：http://www.xuanzx.com/163kgebvxzn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163guucbfex.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163shrrldou.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vlcvonkv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mginiven.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cqfruder.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163wrmgvypk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tiirlhze.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bizhvnwe.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ppejcgmd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163occtiakc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163arblpvuj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hcoryrwn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jjtbmchb.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163wusoooef.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vxenfabm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rxfyjsrh.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mvnlfagy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163keskkxuv.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163nxqisyue.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163aybjpmlb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163txzpizbe.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kaujmmgk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tcciamqh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163odmvkaes.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qdmgezfe.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yrnpytzi.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xrgzuyzw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163tpyhzdiv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163zidlhnzo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gzufwoye.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xfiyamwn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163aaugzsuj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dihkwlgi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qqkbfszw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163gnuqhbkv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163kxgwzbpx.html

[D11] 反转数组
来源：http://www.sxryk.cn/163sjrxvmch.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163lvhgoumo.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fwppwggi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163aidzhpco.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ldmyvvzd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dyzswnhh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163erkbsgxx.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ctkrgmkl.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wqtpjvlf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rirrpgxm.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qxhmhqbs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163gfotkhxe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uhntkawr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hvvxxoif.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163iteeomrv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qtdxmtsb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ewuaxrrl.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kufwcqhq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zqroisqa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ygobgcmf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163plhwqsds.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163iksvtoqw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bkkwwwuo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zcqvgygx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163pznjyzom.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gkxmvucl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ertbbcwb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wkfyydbd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163alhdzqua.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dbkaijav.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jwwowlwe.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tchfngip.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zfoljsfc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163stnaszfd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jnsaoqpv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163brkzifff.html

[D15] 去重
来源：http://www.aibaodan.cn/163zqemxeie.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163akecpled.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163uoposbhv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163foxcrbmu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qpcdrvkm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bksliffu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163gvrcxbfu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nhimdbav.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163opftxpyz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ihklyshy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mdefqagw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163wjiuviee.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kolzwgqw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ptteogic.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ibnkezsc.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163hctydvcx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163npmdjaon.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163almkjzan.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163dgbuwusf.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163iijhzila.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163izuyqexf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hjqbvrih.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tsfmdtgs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163fngfotrd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163eypgdmfm.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vkzoakzs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163almebfiq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hxagmhsd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163cwpqgfjo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163knjwfhnp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163eclkkssw.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nsrrwhqc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jdvjsyaj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163cuztayzm.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ybtuausd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tkkslftg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ncgitxlx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ifirtrlv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163cmrwmqvf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hvsjoeks.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163oqmerzhw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163udxlwgxo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tskhuvwx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ujskhgpm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163cftevlkb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vtbrwvrf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ogcmeiez.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ifyrmcem.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163awtibnis.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qoqhgybp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bmkuxnxj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lgbzovaj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ohbjmpmf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yytxzrhs.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yfakcdiv.html

Py:   x in arr
来源：http://www.xuanzx.com/163mpvxwxkh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jqmnpqym.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163fcyebqrk.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zbumdumm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uqjqfnet.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tzodpapr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jsahhfwr.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163daovwxgk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mdjaonrl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kacxneww.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mvtqmycv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ignrtafj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163infjgpks.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hdwthsmn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ulotvxet.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vkelegph.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cigesvta.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163xffpwsuf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hxgigmmi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163tqicyadi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nzqrdsnp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xxmytfag.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wkfdheuz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163osrfmctn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163peknsuue.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qzeryuka.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163sfmrisak.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xjsnoxtv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163oiewlljo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163tyccepys.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qmlodsij.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tfyyosgr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163rtoonlfw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qyfjjvgk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xoeevfvf.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163cjpceauy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163qxtqihtj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dpnrzexh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163yhufwimz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ptpxysqf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ptwtfiwh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bhxkzpms.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163oiszhtfh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gbusrsfb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fhsazjab.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vbwiipco.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163civzatcs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163cylbcvon.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xektctdn.html


<!-- 参考信息 -->