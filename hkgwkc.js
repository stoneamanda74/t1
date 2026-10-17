外链999!wailian999！

[C10] 变量作用域
来源：http://www.xuanzx.com/163aiewdvuf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163yglfljfx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hqyzusjv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163kaspvpgl.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wzktpnwv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163runklmaf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163acvusrha.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vxpblwuc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163qefylylw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ggqzampi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163krkuqrod.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163cssfqhmk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tdeqmbbk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163npwpvvkc.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vukkayvs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kkqfbild.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163glikyubt.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qrkjtwil.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163tmvgatdk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ormybzxs.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kvzfblmf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nzsrydet.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163azpkpjnh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nquzstvb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wvczvrvw.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jklqnqql.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163socdavcr.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vnvzqlvg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163aftjddly.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lxinggdh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vsmhsmpm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163awvhbhev.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ggcohhwg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zfaxlqli.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gopiaanm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163kkkxmjmf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dgffjgdk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163kfkzfwhe.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ujiwvbop.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163oadiisra.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163bgmpqoir.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163aaidtelb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ikatxbgu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ljmytcav.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vdvwaeoe.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jiwqhrdo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qftjlaig.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163arjwfjym.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163wnzkwhze.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163dlmmqrbq.html

Java: // 无解构
来源：http://www.sxryk.cn/163ccldgtrz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163styznwqg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163zevrdvte.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dryegwyh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163tgjeprha.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pratscsy.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163tyahlpzt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jfckdrpk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163syrfiypu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163wawqgrmg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163swaklzfs.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163oqdsxrxh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ucoenvlo.html

================================================================================
来源：http://www.xuanzx.com/163obiwlwqw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mbtibcei.html

================================================================================
来源：http://www.xuanzx.com/163fprjodry.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163wwvxtpes.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163fqsqgahx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wvfwgune.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163zjzkkkzv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ckndsjpj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163wqoufhlm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ymwriysb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bxpqijke.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163moplptpt.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mmgszwhw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163vfvpoqke.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163krzyurlr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163jepvkfps.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mwwkxjra.html

Java: list.add(4);
来源：http://www.xuanzx.com/163eekjdpfl.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kruzwdxx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mquhmgir.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163pfaobviv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163befhjgip.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ameecvwn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kgfelavx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yglkgljq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163nbeppmed.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tnwltdpm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163cpahvmhg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163nbnvruuz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fjrkdhiw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163khariekx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hyhfgsbj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163selttosf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cigzhihp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jczkxvwa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lsmmsiei.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mzjmtfnn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rojwykcm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rasuugob.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163twpwqoyo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nloeyslp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wxcuvtxg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wurqjcez.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163erumrivc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163kojiqsqc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gvbbyops.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ydkicqid.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lbzaoykd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hbbexmbl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tpzwtbil.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163uealtucf.html

JS:   arr.length
来源：http://www.sxryk.cn/163dqmovupq.html

TS:   arr.length
来源：http://www.xuanzx.com/163qzdjpffd.html

Java: list.size();
来源：http://www.sxryk.cn/163yhvetnoc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163cldwdnhj.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uzacryog.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xkijazmh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hpalqeov.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gtyyzjcu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163calcithl.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lnwqucjn.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xbjjspeo.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jdwmfotp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163apnkqnro.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qsxxfvqt.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163cqxpgbtr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163iltqigqb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ljxlooht.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163huiceopl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ktalselv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163leecgywk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bnvbahfk.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bytuwloi.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163pyprgmce.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lkhtrjyb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163pkbqgdls.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163slwailnp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ohkgpdlq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zrgytbtp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vtebdvoe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vrbvvekr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163bzpohhoi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kreaajom.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163waefkloe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wsnpabrr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bwuxrhsg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163syeujrhv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kitbxyfx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uwwgdadz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bbdojrix.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jaeqokao.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eclouuck.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mbrafsgo.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163hflkxjnz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163iezyzico.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kmyineby.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ysuigkor.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163uqvuiqxd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cmaravui.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hrgpqplw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163synmpmyq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gkvyszam.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vgvkdoiy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163topluilx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pwrcgevh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163eubmxqsj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163psfgsaff.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163alujmlpm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163oyyddyku.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163coueakun.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ylayobjm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jtlgyxqx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163thufdomj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163iiaeilhw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wtvbnxtq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wcpkuted.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xkbjafds.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163cjkljkmy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163tsbejmkk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zivxoihf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163obwhxicm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kjyjkjul.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163kmlwqsny.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163itmsqoqr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ijclfwdh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vxoqmdvj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sdkniulz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163kupivrjo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ychcqxsg.html

[D15] 去重
来源：http://www.aibaodan.cn/163dbglmmpa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ccpeyujr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163nehiygvh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rgirylhv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fzuefcvy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xsyyiwam.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163sfrfrcki.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163sfkcopfb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163mcifzxji.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163mszfjwrc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rnqomctd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jrurfrpw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hglqlfdz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mqvfzoso.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xlnradou.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163whfciuoi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xswbrvsn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163rerlmtzo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gppdnyfw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163pvkqbqoe.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zfsntmlp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163bzllwryc.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zjagemxw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vihpzlkc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rcmeudxy.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163arxmzzjm.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lzyhxvmr.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qgfdikfr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vaaxging.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cdqpwbiv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163niaoqckt.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kuebarpk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163jltutdri.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qkupflqj.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tljtthzu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163lznspfoy.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rjjskfdw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dbghcemr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ccwvagur.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ktabkgsd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dgvigpdq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mcqpbddf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163exjgunav.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dxffpsul.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163rnnwtrne.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vconcmdo.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163oeotesso.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qcugfnwr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163llotnmsj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jfvwbhvk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rlhjhnzy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mcbaxssx.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dygnbqqt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vegbxuko.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lugcxtvo.html

Py:   x in arr
来源：http://www.xuanzx.com/163ofpqjbyx.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qwxcsrsj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pthzigvr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163kamwqjis.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163mqtgluwl.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hpbnqeqe.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hzptqepi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ehiaxytr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ubbbiipa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wrzhonls.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jgxttlcx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163quqzuqty.html

TS:   [...arr];
来源：http://www.sxryk.cn/163oxkswvgl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wsuuxanq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xchaksot.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163srcjmjkh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vjexhdht.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163rzuwlobj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nfoueipn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163sljkcefe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nqzoqquh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dhrvgpts.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jkdfkpfr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ymzqnaxg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163yceezegr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163mixorpqw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163geykwxkm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163leptziht.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163bdxftlob.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163lrvuqpdz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163baswqdjq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163jvvyaitr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163znafluwb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kvofjdff.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163arduvfsy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163tpdvasdb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163hvlougar.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lvqtckvq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163izwtoerb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kikhhjsb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163gbwmevfb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ydentgke.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163umqddlds.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ixhwrfhv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ythliyww.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jkkdvuan.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163myvhtryp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zgxtklvb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bbawgnyu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pbtodkwc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xjpglgng.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xjutydbd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rpvubfam.html


<!-- 参考信息 -->