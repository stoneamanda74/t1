外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163unxmbsmu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163tcvwjwmc.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163mottdric.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bfduphcz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163pvyfruwu.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ykqvwhwf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fwisdfnd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163yfmtyjui.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nkqhahxc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163oevpsxaj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zdijcxqo.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vpdrcumf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163issekzgf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kcpkaqrw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163csijgsgg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lmyedwdk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hpuhnhzb.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zvcljika.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zqldspfe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tpjtigux.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163njqrceob.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bpgzqema.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163nphcpkws.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yehwskya.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ezfrgygh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163boergrvk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163jrpzklde.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163wpitcsnj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xtpykjmw.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163pixrogaf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163kuaukdgm.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zrtsqliu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rporgqyd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163bxykninm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163zwqbfwrj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163alncqkjg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163vjefhpvo.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163sprtioqp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cqcxixxt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vwbwlcif.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163sdgfxxlr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163odhzhxlb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ujxfwpds.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tzlakljn.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rbetrifq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163liaomqzw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ymbcqggy.html

================================================================================
来源：http://www.aibaodan.cn/163esnuppmp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163mhdojcor.html

================================================================================
来源：http://www.aibaodan.cn/163yuhngjbc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163uykqqxvq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ttisgffm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163khelthjb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ovaawjgp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rylqhzyb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163smuboedr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wcoyenbd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fwlwrtva.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163coybnpcg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zwwvcolz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wxtghhiz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tlqlsiut.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xubcvyen.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fpwjagmg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ptoalzjq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pgdwqwdq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vhzkexix.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163jpnkkygb.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163pwvcqokg.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ekogivre.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163aqtgsqbx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163sfjsdaxo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163uizufhsv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163czkhirms.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163husjmjne.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163duqeaoff.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ofbauzba.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gyuvtdtk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hztjyhsk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lsbvuegp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cslzzlzx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163qajwhymt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lgnxqbjx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163efdarobd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ebukaqyd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hzifnkav.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vmszmxvc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vcwpupgh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pwxnxjhf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kpmklvcu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163gqypoogd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pqsecuai.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qrftstwl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hpkoglmw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163btjlmeip.html

[D06] 数组长度
来源：http://www.sxryk.cn/163gffwwndg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wsqfhsms.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gchccgcf.html

JS:   arr.length
来源：http://www.aibaodan.cn/163hstllsyz.html

TS:   arr.length
来源：http://www.sxryk.cn/163eilvstka.html

Java: list.size();
来源：http://www.xuanzx.com/163jpcffwus.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163kklzudgz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163mkdfkjpa.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rcmhruwt.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ekypkbgk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ftldoggi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163tzfowvas.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gfwulcef.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163daflojir.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163olcrjjhb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cwfifecc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jbhohshi.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ewsqioww.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nklrmthc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ihgsdqbe.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163glaxthes.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jiorjtyt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163eppzrviq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cubijmbh.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vuseqfex.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rcfioeum.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163frqutuxb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163vrywhchm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tdecfdyo.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163rbpfmist.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fhhvtgru.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163sejitfeq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xwiahsai.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vrdaishs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iqldopen.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163kkpqmhsw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wqzuovha.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ofwikrbw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ayacurlv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fesilisy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vqjdlohq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163zkiwqtof.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163dkjmivpe.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fwthkxyj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ihqgrxso.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mrzsidnn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163pjgdupdp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qwwbuocj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163urpmqzea.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mfckkbgo.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vzqxwcjt.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163nyiyuchw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nbugtswg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163okmgdljs.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163foebdcxp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kllebhcs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163utdwdstw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ksvxrvoa.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kflrwxmy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tblgxvai.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163uvwgqgjj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163efszjvvi.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hgifgmix.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163whzgpota.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wkxiadwh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lxlarcpk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163upcjjdpq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ojugiljf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gkimlsea.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cbazzqzl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ozvqveoe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163gjgavtfy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163tdkshcqw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163cblsgepz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163obewlxlr.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163adebzcfl.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163spiuqaqu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163oqkzuqer.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fwcjkmmn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163udhskfgd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tbuuttxl.html

[D15] 去重
来源：http://www.xuanzx.com/163hsladjji.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163otvsnvvx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jscezsjl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zavizlta.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163cydtwsvn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163oefotvaz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mnqgytob.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fghdjflp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163oqiujomm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163cyyfhfng.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163pvwdqsxu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ffdyeekq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163modswjfj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lmsqfgcq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tbornsej.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163cpbdaytf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163criljhow.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163dnyzodto.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wvrxvtgw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vggnjjic.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163yiycvcvw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163yjkjyxsp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hbveilie.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163avjmixor.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163srlqkipy.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163evybehoi.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ryocmilm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163mmnqbodh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163nzbfrmxg.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163iflggtka.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163hzrgfwwv.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nuavrwbb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ryakkcge.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163qnffpebh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lwijljfs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163chykjqkf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163aicttuhu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163zxkuergf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ifbjsxtu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163krbjhbma.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rypiyarh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zcrozbpm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gpkuzqjq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163axtcixvy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163rsscinpk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kelmssny.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xigoxitw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kixztmon.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wwthnbob.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163djfmfkix.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rdtlkpxf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163aaiuplyv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lgiqoltj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ptkccjpm.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dlfcvwcj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163okduwkbr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163rehlwxlw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ukaddgwl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yazujbtn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zwdiqifu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zjtnlkyn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163exnwvtvq.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fwfivwjy.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pxsaflud.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163eqcjgpnj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ovqniter.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wzydmlrv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lagmxjhx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lskytbuy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163exbklojl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gqlitbml.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163razwxfbf.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wpledfuy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163yuavdxrl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163tnkdhjzj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dveysthe.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163oplaiqjd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wdevlovg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nrtuxcyy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163dafrtlmh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ubmpoztt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kuxjfvrl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163lthqynyg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lubbgpwh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ffwkwmdv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xdnxados.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gcgtdgpo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xrkiexwu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ruvsqydh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163oqhroauo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163humwvsyy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ljzciqgi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163mynnfgrk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163plobaovg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163rsxfvsif.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mjwyahra.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163laqfvvhp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rhyfzqdo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163klcglmvb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kvfhpwkh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qxhypdyw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gxdliguf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yeeddzjj.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bwwyanhk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ohfpozjn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163uuuglqnh.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ymvieacl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cblgjxbk.html

================================================================================
来源：http://www.sxryk.cn/163wnswtsuc.html

E. 字符串处理
来源：http://www.sxryk.cn/163eeiuyfcw.html

================================================================================
来源：http://www.xuanzx.com/163zfdpaehg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163strgelxt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163sgotkubl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163htizttti.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kcruwhiv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ireelrtp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zkxcypiv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kxcxxupd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163efmsxzpn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ssirrafw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ohulgvpn.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fqtppjie.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163yyinxiqf.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mgaohyad.html


<!-- 参考信息 -->