外链999!wailian999！

TS:   同 JS
来源：http://www.sxryk.cn/163edhlnsiu.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163smjmtohg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163yhmuciip.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hhfcdbse.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rujopvlc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ftatlxca.html

Py:   from module import func
来源：http://www.xuanzx.com/163gopfjfin.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163elegpzzt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163nbzguuib.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jxdsjgdx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163odmcbtoi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163tuewjlcp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wrxntphu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163eyngszpg.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163eaznucuv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ybugpjmr.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163wycsizdq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mdiicukb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fueviyev.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gkexcjtd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163weopqykp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ucyqszjt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jlyhvlet.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ejlasffc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mvpbrovt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ixmncmkf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163diqblxbc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pcgrtclk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ajnzkadg.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ojczvkdm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fspcmvvg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zwpfgwoz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163fipcndtl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hlyfsjhr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163wyybgeid.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163weoapumz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fssxglda.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vexyqyhl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163igrqlngq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163otwmnqlp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xdvqphbl.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rbdjtqce.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163wzywnwln.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163qyyxupan.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yswqyetf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kguqorpk.html

Java: // 无解构
来源：http://www.aibaodan.cn/163luvisdtj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163eafhenla.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163zfqyeyxu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ykhwgdnc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cfdcuekk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wcvxfvqr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163axfnwgeq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163rtadiekw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163oustamwe.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ucqqpwik.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tswhqnhd.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mqsuaeiv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163iuttbrtm.html

================================================================================
来源：http://www.xuanzx.com/163ltancvqi.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jboyjedx.html

================================================================================
来源：http://www.xuanzx.com/163udnvxzzv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163sqaavobg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wwhoulgb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ccsomnth.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163sngvionp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dpjxusdq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fdytqlhq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163pwsjccbm.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163fjlnuikp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wgsayxfv.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163dvuduffc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ouiletqx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xzhaltiu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jeyfubpx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ytluaeur.html

Java: list.add(4);
来源：http://www.xuanzx.com/163yyxyiefk.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zgsxgjow.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nyfcfiir.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163uqqgbmkl.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kmfvxepa.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163efzeobjl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pgqxpyij.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163iohijzwq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163desmxosg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rxrttegd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163btuuscnc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jpfvnncj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wxfwoynj.html

[D04] 删除元素
来源：http://www.xuanzx.com/163sbfrwkdv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ydtfbynz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163vsezreqv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ernoawow.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qggbxaea.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ndvygyzm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163agfjboiy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163annwooin.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vzmyncjp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ffyutgsw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kvgxnsxx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163shiyytwr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qsgklvjc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dnbdcwhi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pmjwrokg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163axvbadku.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jjtwofvd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rdddwmpn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163mkcsftwx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ceiuuvpz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vdrparit.html

JS:   arr.length
来源：http://www.xuanzx.com/163ytpdthvo.html

TS:   arr.length
来源：http://www.xuanzx.com/163lqyemfdm.html

Java: list.size();
来源：http://www.aibaodan.cn/163featolxs.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lsfgtems.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ueqlfyjr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163iegtkgka.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163noroleos.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nwnwwncu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bkpmeexh.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zbztzlug.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gibidtzn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163erkklypv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xymgmxvv.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kyqmtcej.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163uxrfqmrv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ydanybex.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163osyrbosq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163syuqyqrm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qygcndsm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cfkpntdd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xvbjkivm.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163vinsoico.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tvanqyzk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163trekeszi.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163nrzsdnvb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jrkjcpqz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163celyssab.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163oivnnyxn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rkmshquy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163cihnebpi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163fqkwtgdq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fpuffigq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163khhnfrcg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wzimqeyh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hwmgghrm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xveqexvl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163plhfshhj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163irqwtthr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163yyfeaxnx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163pwttpplz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rwthzibt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mkqtchvn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rbbadkgp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163fvhufslk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mzvznhgi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rzqalkvw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hqpyunos.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163twqouviw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163pdlsgabx.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ferhtutn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ukbzsmtl.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163utevzlpo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163jmniuccs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163amlueffs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qrarbojc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qdoxfgna.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hvvkehmy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163aiuouqup.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163qyzmanxu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dviceiwg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pfhgeegx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mvjffdqv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163gvkfdaif.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jczttqcq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wtlljwxv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ocofrtfo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163igvcxrdn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163cfcedgmp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163rvfonyez.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163dwooojns.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ajqhkzla.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163mlluksme.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vlwwcefq.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ngxzpdpg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163oqoetwai.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ddxxecit.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163sehtxrim.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wcfpvpor.html

[D15] 去重
来源：http://www.xuanzx.com/163qqbvuziz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nsffmwuc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163zkvfuins.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jinrjqth.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bpbrnnsk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vsjeezgh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163hlesafuv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ytajxpwe.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163whmppeww.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hayzyngq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gkpqhfqf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fcbdxjbz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uovrasll.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163eokaobln.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163lhqigzqe.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gbibofao.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rwhqxesw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wibcalsx.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163cabfodns.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ueedwnfx.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163uslfispn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bncaeemt.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163zqsfooky.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163icxwijwk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163flwznjpd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163byzsessk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jzesuxfe.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gyatqksu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bwuckijt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vsguxtie.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163cqkenesz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xtmwjuja.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163dvmdeynj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vqadfvuz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lgytanty.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yqkrgsjr.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163utqvakaz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163diybsxst.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vwdjmlcd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tuduxxvw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uxnktveb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lomdwqvv.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163sooucudh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163dfbxpnff.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163myanxhih.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163npnjbhjg.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uefbaioo.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163acybkbmi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lzqfcewm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ozbgarqe.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gniktfva.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ugxksaqt.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tizgpmdn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163brajpuem.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rxjrlmju.html

Py:   x in arr
来源：http://www.xuanzx.com/163bozqojfx.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163lwaghjwf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dqyqidvn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tirqkxfn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ufalrfnc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163swirkajs.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hfttoseo.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163unqrlmzx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163llqenzsm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xixujsed.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163djrgzeuv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163zcapqcsk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163stbcxkku.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163pcgpdeff.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163szndvpfk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163xjbvwspx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bruiwhty.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163finaeonc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ppggikke.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163eqzkrslf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yajsmrsh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sxldeuyg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rybtxrgd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lzkxtybg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163glmdtbsy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163jweokujr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163sfwzcmpv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jczjcdgm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bdwyopfg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163digbhtup.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jakcbqna.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163slpfjmfb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163txnfxlmq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wisodctl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ghftnqqr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163tksgbcfb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uatxnstr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163eskpdetm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bwpwkjhu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mowcdfce.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yuwrbgpk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bglokvyr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163amnlljjw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163cgpuxtmw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fhdmmnhk.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163yycijgkr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ailxspjs.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rujadjtl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163eyurcbrn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163rriyybgd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xjqrgytv.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163odlajepw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bidpfaka.html

================================================================================
来源：http://www.sxryk.cn/163iqlmpvzn.html

E. 字符串处理
来源：http://www.xuanzx.com/163fqeweqfw.html

================================================================================
来源：http://www.aibaodan.cn/163bvfqctrr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163aabapmgx.html


<!-- 参考信息 -->