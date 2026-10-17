外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yjlipwcs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163dqxpzuet.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jotlrodk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163viiycbly.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163bsulchjp.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qtgvrzrx.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fbeahebn.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vpeoudfd.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xjwspzce.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zlhkeawp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163mfxdmtta.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kphvaxpi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cbswgkwf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dgqhvunb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163uuuvhtsd.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bylfwmyj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163udmxxleg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mkpvprjp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163erdrfkcv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wrfjisbp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qzkgpjsw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bgqiekap.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tzvjlbnb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163qrswwhij.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mgkbfilu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163roqagcmt.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fzljsght.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qlixpfly.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dskedint.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gtgslqka.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rhxgzexv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wxxqilgb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163kbgoqxrz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163szqefimv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vpkftwbu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163sqonzlui.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ulimwjjq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pfnospyo.html

Java: // 无解构
来源：http://www.sxryk.cn/163zjhthytn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dlwoahbv.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yyxxdssz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163kbbwgbps.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163zjdcqwvm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kytktpnk.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zwfeqhtc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163axxnpono.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163simdutri.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hllvnhvm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rfcpbiev.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vbehpagu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gbuannhb.html

================================================================================
来源：http://www.sxryk.cn/163mlhlzjnb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ubgsspba.html

================================================================================
来源：http://www.xuanzx.com/163xzlqckjy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qdgsohuo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163fedaubho.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ygtffkps.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xbupocas.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163juugjyqw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163sqkbwuwr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vdfkhprc.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zeavypaq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163shkdwkcn.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163tvgubbrz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163fgqerqtq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tgweyvyp.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163getdxwry.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yqxczmhd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ujyifslf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163jseaphae.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163uxrvshsi.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dzhcecvm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163tqcxiwrs.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jgskedox.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163bbufthoc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163qgbtppxw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gwpbzaky.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lzkuqgdf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lolpjbkc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ajkamhut.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163owaslskl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163dyzzdczh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163nkjimquu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163awctznfv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163evfohruv.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163yrpnjvlk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163icjdtulh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ysvkvtpg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163frvpheky.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mjjlffcu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163dyzqoepy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ammgynup.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163swxwgeki.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ipzibxvx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uymrlnnd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qwwdhcbu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163lmdovpfs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163asaveiaw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dnbntupr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zxhlyyyu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ntiodswt.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163blkndxyu.html

JS:   arr.length
来源：http://www.xuanzx.com/163epiglykz.html

TS:   arr.length
来源：http://www.sxryk.cn/163ndeqsnmh.html

Java: list.size();
来源：http://www.sxryk.cn/163vvcughzg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dijyhnke.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163gfefmbbj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163acfzizmm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ghpqzuop.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zmripmyi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163besyncul.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tdsduxbz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xzuojuaz.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163uminygik.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wvduwuay.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163gduytlzr.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163rooeaumi.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ckvwifgj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163limktbvy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163qzfyszxh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zwwdzyyz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xhdlulda.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rtfhxxyn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rtjpgwae.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hdpofsgw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163boyjzfto.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163fgjtnfxq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163canakpty.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xildiuda.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vpyevaoi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dartlyrd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yuhryhly.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ygnszjib.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163adrioevd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163euqlaiwz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gwamwgad.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163eqsmwuwn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mbfyrhga.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163syrfmfmf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ljkggunh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ibupvnyf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163pfcjjpxt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dnqgzhps.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163lskkzfvk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vqpjphib.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ujmzltbn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qyhtgqmn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ndrlscyj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uaqhjfol.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pxwzoaft.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ngziffjw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lnfxxwqi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hvbdpvvc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cswymhrz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163syclvttk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dhyacujp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qdaglpyr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dyyhoafh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163qvzbkjtv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163qxwjyxho.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163mzdqfhay.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163knyxgcnv.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qayjvuvw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163nbsqdwic.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ihoyipja.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jwstzapg.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jxreyxjq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dtfdaafu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163httfntqr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163treeezaf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163bhbnhjwr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gplfbcbv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163aqwabfwx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163khpuypzl.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bzdkubkt.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163oimgnmnn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jgapznpf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163uydjudrj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wdgdbqxu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163iwkhusby.html

[D15] 去重
来源：http://www.sxryk.cn/163aodtanjn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xyujzbmz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xeoqcbfi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uakujfnr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xjmlawhy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ltwdpulx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kmwmefyl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163tvvkyklb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dparonrq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uwgtbvoc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163lcwqfcyl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163eabyxntd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qystwiiy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hlpgunwh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nuoojgxo.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163vkutilba.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pbiptdnq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ivskjdgq.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163grfvvttr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163fdpqjyqq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fpfsmejs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mfwniods.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163sebbjyfv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cndlsbcj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ufplhjgw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fqrhejsk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ekkwgbgx.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mfsniymd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wzelahgi.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163eyfqtbdj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ljvuweec.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dxwgtehn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163deebunll.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163bhojooqz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lxvhoqaz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nyoypedk.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jaassjip.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163nxqdvtpb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163oolcbsgm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163znofdapy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cgiogssl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rxhdohxg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jyxtvwxr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163kligynka.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kgrrzxfw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fvaehoaq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zalwgbka.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163pmobyjgc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uzkntpdd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ruzlxozr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mlmvjbju.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ligdixst.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hieimloo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wwhurucl.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163uhpsypmv.html

Py:   x in arr
来源：http://www.xuanzx.com/163mshugayh.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zioiuure.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dsjpnmbb.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yaebppyp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163dpmrtekn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vyipadmp.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mvdkdubu.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163hqdttpln.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ksaitarv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ugptphat.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fcsdlqjq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163owythrht.html

TS:   [...arr];
来源：http://www.xuanzx.com/163gonrtygq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sqgmpimm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163eydnasgk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163dpaxkevj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163usdarwrg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qpjwuief.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lzhdgxfh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mvyvdfyj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kyksxnzr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kvdcxcgn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vapdoaaj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jxfyunia.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ztdkoznd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163stmooeqk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163sguozqtj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163riaqmfis.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lpdokqzf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ysmojofx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163yqdquvsm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qvdcebyp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kgxcvarb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fvcinztn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ocwfwjlf.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163eojxuhui.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dvtczgeo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gijgxcgo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dusrinaf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ryvegsbq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163niooohbf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163uwnovvch.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163moqrirvv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163dsooxvnh.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fkuadlbh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163zgbcrcut.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ijwhbshi.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163etmudxzv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dvzhiyrr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163elpkyxpx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qovsubug.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163dqpbhvyl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mlrumtkp.html

================================================================================
来源：http://www.sxryk.cn/163cevbpkjk.html

E. 字符串处理
来源：http://www.sxryk.cn/163pehzzxfv.html

================================================================================
来源：http://www.sxryk.cn/163ugjcfslr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163oeccanhr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163bgelwuhs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jvmeqxek.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aklzuhpw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nfywiobp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163epysovwg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163oyaevgma.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pxbivyei.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163elauvxzp.html


<!-- 参考信息 -->