外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163dybmbneu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ndcaswrg.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pthcfdpo.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163nzwbodbg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zbitibed.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ohudzert.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163azstwjhz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pjxmxpab.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rmmiytpi.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163bkmsalmz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gioqyhub.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163renclraw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163uygfmlds.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jccmpxlc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163lmdjqtmn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jdnwgiyn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qqsepycx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cjlogukf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xmgrfrld.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xgskwdxf.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fwjenwej.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jlseglxl.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gajkeknt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ysozlpnz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ksnqztuo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ykjhcios.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163bgojlxhg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bbfazrnn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xrfjhdnj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rzacpgug.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tunnvafv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zleqhgal.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mjzuosch.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163cfcxehsn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jxstpmvy.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kwqothqm.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vcomlwkz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163iilpypqw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nvogxjht.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163glrtbslx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163tjkntqrk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vmurqwbh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163lxwcjrbh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163myvfulrk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mumhueog.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163jsmdmbdp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gcnbiosr.html

================================================================================
来源：http://www.xuanzx.com/163jfezlscp.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163tcshoxpi.html

================================================================================
来源：http://www.xuanzx.com/163owlvvxtz.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gbbgtpgf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163jojxhbrv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wlkkqbpi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163soapmlpg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163uegvvoog.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163cdiztpat.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163eptqrdor.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163nyfzgpos.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163aazwbdsd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ychtpquq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gltjgnpf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163oqcdgplz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fldlxsza.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163flwhycri.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bwffkwxn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163pyteghny.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ggjdtsiu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163axppkmeo.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163gbhqqerf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163jrunxkru.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163zthbzgom.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ezysabpp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163qjwugszj.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163koeeqslb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nzxbfuvo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wozzvkjx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163iuvxaebe.html

[D04] 删除元素
来源：http://www.xuanzx.com/163htbykuno.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163utpslhwr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gpzwbkmv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ykrrzryf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dghojkmb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fmhhwthw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hwcunalm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ktwshbru.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jezhqlfc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163opmvxvqs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163niimszbk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bcuqbfdf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dpkxibyq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163nksbgjlr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163uqyfcufl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163aqwgykcr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mfmxgbor.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ktclpkdn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zvbwrhbp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jngwhcit.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163oswrbimt.html

JS:   arr.length
来源：http://www.sxryk.cn/163gtkrfyst.html

TS:   arr.length
来源：http://www.xuanzx.com/163qwkhqvuk.html

Java: list.size();
来源：http://www.xuanzx.com/163ddrssnas.html

Go:   len(arr)
来源：http://www.sxryk.cn/163htldawsb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163aqmhkkek.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zlllbdyt.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ncligoiy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hoqqyoml.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ambkxvvf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163sjpfeiwr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163peixjoor.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ppirswgc.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163prnhjvag.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kbegnxap.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wphgdljg.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163paxlkolo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163aixtwbjy.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gbesczdt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lmidnuho.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bgfktlvn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163llhcpepj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bpjyiakp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jsakhedt.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qqrhlnxm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kfniutiq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cjdyhzxk.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163cpldouzs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163javfqtlt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163qyzdfusw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ajvgssrf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lojbggah.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nhioytfp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163iecxwzun.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kzhvnoif.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vjdagkht.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ijtotgtz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pzaklhvk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163odvewzmn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ufkxmibu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uwpszfft.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163lpvuodfl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163omhcwyut.html

[D11] 反转数组
来源：http://www.sxryk.cn/163kereunyq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163vsmlmnox.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zoeqczkb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163iubgjbks.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rppbpevi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xteqrudj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uwxsipir.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163egotzixq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ijtaqkvf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ekuxpuyh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163dhnowvbm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163breqytma.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ysqrxult.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163urdgbase.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pibpwafm.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163sqqxaddc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ppdcljtr.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163muefejjt.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qnzylefd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163evophshb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163eucsxbiy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xlvvwovp.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gbceksdq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ocxsmzob.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163aheysvjt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mhywhpge.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gjxfrdpu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163txtdxbvp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tiqpdssz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163weytrlud.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mlqhboyz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zdbphwya.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163lvzdolrm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lnaazrvw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wyiszubr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ferlgfly.html

[D15] 去重
来源：http://www.sxryk.cn/163wniyrnfj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zohkcccz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pewfzqmn.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uwllmfwn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163feilvjzu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fmlqqwqo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mvylzxdl.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dprluxzi.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163emwvacis.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163iqmvyqpj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163iwzotsrq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163uusikqjg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pxydysyk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163srwjobze.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zfpftnqf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vartfsgr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ylgmqals.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163znxgycra.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163fkatjjxe.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163oqexqehb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163efrvhema.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163spxyvhja.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kvxsmxbv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ksxmwaqo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163avkdqcgq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163sjscnzke.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jpgljraq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163sxdvojfy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163vhqbkdni.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ubadzqex.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163sgzjrnwr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xuatytee.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163opanzeug.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xrhylnob.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qthhrqum.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ftffhpil.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163omuskxgp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163tnvdfeip.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wxpgpcrb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163oaklkfbt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rvpelvqm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163cubpziwc.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xhsfpuwq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163owonfrad.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xzzxpaef.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163odidvokd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jkxhcizg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cpoqlniv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163amogiprv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163afsgpdlq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ariygnnm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gkshedme.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lrqqsqqj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163scezucgn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163uqdbutbw.html

Py:   x in arr
来源：http://www.xuanzx.com/163jmhlizze.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163nlmyefta.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jovuuxeb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sjnalqjk.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gymxuxus.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163phjyhymy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163drgdnnye.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163vfnptdfa.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fpnlrjrv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163abnbphsr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mxjeebhj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lslgncms.html

TS:   [...arr];
来源：http://www.xuanzx.com/163lqzkzepv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163eqebyepp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hofgbnaq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163tgqwluam.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tfcbwrps.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ufiankoh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163eswaoeac.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163lzjnvcuf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mmagfuqn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bzjvoyeq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tsfwvohn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xdoswudf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ebutndli.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ianmvdqv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hymavoit.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bjupdnpd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163iivpevph.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ihmrhhcy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163outfknai.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163kjrqejgs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163nicumpcq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zjckioxm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163sqwgdfdy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xwgjvmac.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ziakrnze.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zrgvjjoa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yzaamrjl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163cbfgqdnz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163cavkxsde.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163xcfadtnu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163uhhxjdyd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hcfihkzz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163sjlifzyl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ggaxcfci.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cnxejcoj.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ubdqvypc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163maddmwnh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163sjhypgrk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pmwisjkr.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163iwmbllqd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ajfrecrm.html

================================================================================
来源：http://www.xuanzx.com/163lvwjmtbh.html

E. 字符串处理
来源：http://www.xuanzx.com/163qxmnomdy.html

================================================================================
来源：http://www.aibaodan.cn/163zbqqemxc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163lrsspelj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163wsezejjq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vmweusbv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bdjnzmcd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zsggpofz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163butrfaeg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ingqkero.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163truiigqd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ykbgqaev.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163olzlpojn.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mobhkjof.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163puxvnhgd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xeqfetmn.html


<!-- 参考信息 -->