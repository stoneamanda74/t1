外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tyoxjkhn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163eghdtvon.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rwgqqkkh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163miyuiize.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163nlqtzjdo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163gbeozoaq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163cgsaofzo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163lzqgkpqk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ijztgwzy.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qwaxzvnq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163liyrxspg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rmbeakbs.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xnxgrgbe.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zmvsbfzl.html

Py:   from module import func
来源：http://www.sxryk.cn/163rfqsuuqq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fbjsxqfg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zbakajij.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mynetsfl.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vnhxgdvw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163arjbhzdz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gcjzojxl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163weufpdzk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163inpisqww.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fbwwttvj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163klghovcl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kstqebzz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hlbbjier.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163igmfzyxj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cujrrjrf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163yepxgpgd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rwkgexxy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kncwddey.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163kooovrvz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qeijkccp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zfuljapv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pbrrikuf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lliafmcp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bnplhgek.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163sjoqzctn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kpxxmaav.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ufuhojfn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pdwgklzh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163vpcyfxvo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163sjxsqiun.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rvibzncj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cacwflua.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163cflxnmvn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ydqkjqot.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163eraqdnni.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dvdxpsei.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pdxxrkmv.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ypmyjpth.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ojfmviec.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qkmtzcxz.html

Java: // 无解构
来源：http://www.sxryk.cn/163bmbfklre.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bmrmqwch.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163adswhpti.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hipnocmn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163kribhszq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163obppimlp.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163yakecpzo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zdamdvkm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163nbkmyeoj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qsalhnhn.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ywuglrll.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mrijnofj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jhyatwbi.html

================================================================================
来源：http://www.aibaodan.cn/163tlhupath.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163pihivezg.html

================================================================================
来源：http://www.sxryk.cn/163oqsyjzvq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cahzfbmx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163jyfxpxhx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xclaqxve.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163nvuvthru.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pphfzsey.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xhhumxvd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163pmcxinfk.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163iduzmaud.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163geuwhnqu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lqatjhwf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ejuifkxv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qkfpargm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163piovgfxy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zfxqprfh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163onndozms.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rghyjuee.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163towxitxh.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jsqjczeh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mqudglrh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rcibbgqi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163cgvfmdek.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163mfmrcxga.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163myomexwb.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163sqtygako.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mdrnqlea.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hrxdqxyv.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mduiospg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163beuegynp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kozdhfvp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ltprzsof.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163usnvbqxt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163orsipmif.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vnutxmsl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xjjgmvsx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163iygcrvdi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163appxfztp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163finhbyrx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163alifjxzi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163upqqusgw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pqssgxhs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163zwopwvtl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mijfglzr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pmutwgxq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ybjnswgo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163scbayspf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163gkjupsip.html

Py:   len(arr)
来源：http://www.xuanzx.com/163abgxegvn.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ncmvdlji.html

JS:   arr.length
来源：http://www.sxryk.cn/163oxeorkcu.html

TS:   arr.length
来源：http://www.sxryk.cn/163rajysubf.html

Java: list.size();
来源：http://www.xuanzx.com/163qmjcgdqq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lxwbsbfq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fjdqfurh.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uvqnbhfw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163upauqwbw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qtpkwbli.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vqxivsoo.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sntxctja.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kftuesxm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163wmggzaou.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pqaygjhh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163apeqxlga.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163rxaakuik.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qgmjuamw.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163blwpmzhc.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vqqjxxzp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dcxnpbvb.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qnulsxdn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163aodjomkj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bvefyjuc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163yjqyrnqc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163frqmpqxi.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163gekqgipb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163icjfwykl.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163agegruiz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nqqpvvox.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163gemfnibt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163mdrttmpo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163keiglvrx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fsozjeyl.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qervzkbc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hxljztgj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ptuvpnok.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zljhxugg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163yztkgqpf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fezrnhab.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yqmeeuyh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mmnpazor.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163usecvmmv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163apcolhbe.html

[D11] 反转数组
来源：http://www.xuanzx.com/163klpripcy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cegbzryc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vlfamhkj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163cnnwznne.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wusqmpnv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163stfdkrbf.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zaxuwdjx.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163fiswqvrv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xynynkvb.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163fvbfatuc.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163cmaklqac.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163uirkdzld.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163irkpwctu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163veymzeec.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163oanzywkv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163eftdlepr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cwjmpojy.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jetsalwo.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cqosclql.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fssonmrq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163umbhldoz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nqrfilyn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vdtrwldr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163okjtfpdv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dflcadzg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ijtnrfye.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zvglzyon.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163affzszxg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kwfnrvqs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163atwlrpvx.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mrbcnmxd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163thkaakor.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fzabakwl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gbmnfkqw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bsckceue.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163jycawubn.html

[D15] 去重
来源：http://www.xuanzx.com/163ivcjiupl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nwkcrpus.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ejxdeyze.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163cfvilvyj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163afpvctaw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kvmazmgb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163sgtsmtst.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ahnqhfju.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163lnmwevdg.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rropwoqp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lxjhtfym.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cnixuaek.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xdzsajeu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163oxbcqpvn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dejxxpcp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mistjbaj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rxeklnkf.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vxvmgkqm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tgvmlrnc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163gfnsvmah.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163xpdfvmhz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ktkibpkz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dchlnryc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163romevatf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lwwrlaff.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163olfkzmma.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jketiyvk.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lldszylq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163zbpbskug.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pryxigqf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ibnrwnsg.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163enwkjqup.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cwqmnszd.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mjfqmioa.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rkaexwgr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dotoqwbc.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163gkphkmvi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yacsvrnv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163sssjfjub.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jipjamis.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163itnydbfq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rzrrglsl.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pjuwkjxm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dtlgympn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163feamsbjg.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163lcfskanq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dmiigiqe.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163izlfkxwd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wzddjzgk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hmsaoyfw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gfgfbuet.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uysmnqbd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163pjreojby.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jlhiuihm.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lbphxtxu.html

Py:   x in arr
来源：http://www.sxryk.cn/163sqcpzkjh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jfwpmxnv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hrysrgri.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163azmrdpzt.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163sbfvmfvg.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163sccwmlaq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zeebcdtk.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fosratic.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163corupyqh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ghyipqss.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163dguvvoah.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ednddowo.html

TS:   [...arr];
来源：http://www.xuanzx.com/163kduryzcv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163etnygznz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lpgrsudu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jcqqvlfp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163luhnrezf.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163fznjaosc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163tzybcxhh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bqkjachh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mgucgvwm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tffgzuga.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163cjqeqvnv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hiwijtmo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pccvawpz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yvxkevkv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163yqalgubu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bomemvda.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ohrfgwhr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ugapuvlk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163dkuvenei.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163oedtcoav.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uymqhoey.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163yjfsnfbx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163alrgnenq.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ifurfyjl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ljnibnek.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163exsbgjjf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jznthcpj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163uprmeipt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163vzzubnuc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yvqgncez.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wqsmldms.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rbqqcdpz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hxokvyde.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lytfrmxm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hpyzfycq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vjcqqffe.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gtowdxfg.html


<!-- 参考信息 -->