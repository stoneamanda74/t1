外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qzhblcsd.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kwmkmwik.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qethjqcp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lrzkxnuj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gwftzigi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163yzvjcxba.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fqwirrsi.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vtzokteo.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163haahfzwf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zjajiive.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163abfxijnm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163osvydzcl.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gisnmuke.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tchimxql.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zcuixjnw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kwzlhyvi.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163trfwehfi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qahiryob.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ppsqgxsa.html

================================================================================
来源：http://www.xuanzx.com/163guytcdmt.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ywqgjiwd.html

================================================================================
来源：http://www.sxryk.cn/163bgometiw.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163zgblzfjg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hwkyvuns.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qbzmyqey.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mqglrvms.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163iaqqtcgr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163cptnvzwi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pojfcdig.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lxblhofw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163txvvywwf.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mddptukm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wzmmxerx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cectnfie.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xgfvwrgc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lrmkawxr.html

Java: list.add(4);
来源：http://www.xuanzx.com/163lyljlsrb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163erhwrtdf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163arlhvsoc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kuonibyq.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163wnqlfcmy.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163njvaxhkf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163eykekzfl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163bnfexipd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lzrxgvty.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163horevtuj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qcaasfqi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163hsshojja.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163cjqoxuvn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ozzcntkz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kvgelysq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163olzcziic.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ftswgxst.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163hkhceaxl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163iylvtmuf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163axuldgiz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fowoxzrc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hjrdhbpm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163shqhvagj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fzojukif.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ezuaxaqa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qydcqqug.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163acqdhtgl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163sgnbixjv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ypsellce.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163awjgbwlu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163aveftunf.html

[D06] 数组长度
来源：http://www.xuanzx.com/163swvlyygx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vmurjtji.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nuzbyjhh.html

JS:   arr.length
来源：http://www.sxryk.cn/163deechmfd.html

TS:   arr.length
来源：http://www.sxryk.cn/163igcafjae.html

Java: list.size();
来源：http://www.aibaodan.cn/163egvnptlp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bbaysmlv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ekggqxsq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163otlhcchc.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xoqvkrrt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mmkwykgg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jlqffuhb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nmgnlvrb.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ghutqptv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163labmxzkd.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yvsnobfu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wyhkpxmz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163epcpczuh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ipygqchf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163kzptbkea.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nqgloeor.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163koltjepb.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ryevrpyd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wfctdyie.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163riwcblyo.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jjfyglje.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hbzsppfp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163sveyekjp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163eeppvfra.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vpjwymgk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jdhgxzrt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163cjhmyymc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pmlqewar.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dlavsmjw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dadgcmox.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jhpdizux.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zzhutrmv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163punhnnij.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vclseuqh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pptggtlz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fvvgmbby.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mbafotkm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zuwjiyvk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gyaerchz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qzbugngw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ynlgktfi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tsnxrkot.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163pmtohiol.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ebnmflex.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hncktuap.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163kengoaqr.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zpaybgdc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ouyruwud.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ctkzajdn.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hiamqpib.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ixzzwapg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nrwogpkr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mfsynuuw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163liztisux.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tqfgcjdt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163nlucqtlu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ledadkha.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nqkdwity.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qlzttonm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ybwcycjp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ahjttcvk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ytgmkbgz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163afpaytvc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163hawwzvwh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ckxxpnon.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163unvdnxtu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qzeuivmo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163penextmf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163eoalgqxr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vgfqeefm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gdkcvbxw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gvvgqvre.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163umovtzqj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tqmnkfgi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jtqvbtlf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vjkgfvhu.html

[D15] 去重
来源：http://www.aibaodan.cn/163uojaidiy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zoscvqoy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xwretscn.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lncbarwg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163honplrmk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163svjddmvv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163zmcicwkr.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163silurope.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163epetztnx.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163euifejsf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ytwjcidp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163yoxsjxez.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163owhttfdv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ahseznzj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vsqlffvo.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nigzkiln.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163cpcccykc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163odjfrtez.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163pnlkkgph.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pqqujhyh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xlcffthb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lzxuhryg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hkuuvdvf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qrxysgcm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163kzgrkxpn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163anciruox.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163yqcndcon.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163cemmeidt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ltgmfzlc.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ikxayiog.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bjwlrtao.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nhjfkrgx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wagucguh.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xabehkkk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ihkxxlax.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ygvuilho.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wbltiiuk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gikitqnt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163conkppbf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pdsjwfhm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lclairzq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163eaxxgegp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vdffecai.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163yobtftlb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vvityfom.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163nlbiltdb.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163reolfxiu.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163exvxwnaz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bouvalue.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bdfpxkqf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ctgpdnji.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ocxijhhf.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tvyzwspd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vckvbczp.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163sahnjveo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vfdcagqe.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163sduktbar.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wsrthqeu.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pykwpthc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hkfcqyzt.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vzlqlfvu.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zqosdnda.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xlejiwob.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ykgmyarp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163paobdmkh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ucczwkgm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ueniaome.html

TS:   [...arr];
来源：http://www.sxryk.cn/163emobjxkn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ursfkmas.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vpoihelj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163eiilaape.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tlwvadaf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163txamykfm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163tvxtqyhw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gafzrexz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fnajeqei.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vxiudyml.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qlygckbw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wqkfbyhl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163emfxwjdz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qhawxlsm.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ztlsmsdd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163quugvmdv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zhugdntc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qcrvkkbh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163djllecnm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163vdvemndt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163gtxvjlwg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lvlwzcbz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yydririw.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163lgulhgis.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163wsqqnnmg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163gbgrtojx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163utowvupr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mqvkmcnr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163kskuxuzz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163aarlksdm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mnbhoxvt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163frwjabhj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163atvjxxwy.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163yzcpgmav.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vktubasz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wmyuvmev.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rzegvrtd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163slcglrwj.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163nxrdjdxo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163srbvqiay.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wgcnwydn.html

================================================================================
来源：http://www.xuanzx.com/163mscufmph.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bcgppkgt.html

================================================================================
来源：http://www.aibaodan.cn/163jrhbbmdw.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163sjvjwgye.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163suozjldm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163meikgvjm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mwwgxtlk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xvyanddp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vaeylftp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163orbgqfqn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163xpayppoi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163yonpdgxx.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tdqbljeq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ipnnbcbp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163oheonhpd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tkmptocm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dxtuivdy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163sriracow.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163veutnabg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wlljhxhk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163algkmijf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bnsgtjeb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mvlrcibt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wbrnxawu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ozhvucth.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fjwtqayo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163weurvsch.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dyrrghse.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cnxjajzz.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pwsyyqia.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nspiyrok.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163mczjonhy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163bytnnusv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163yizfxtxk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163rcrukbin.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xpsqnqye.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wbufzyny.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163gownwtpt.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ichoziwy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bhneysdy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163uetunvip.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dcvyjagu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tppdiips.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163wkcwdyqh.html


<!-- 参考信息 -->