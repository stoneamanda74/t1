外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163kuqsrerc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mhhnetph.html

Java: // 无解构
来源：http://www.xuanzx.com/163fmtfschq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163udaiogfh.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xadjjlbs.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hsjybphb.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163nmkjgiqx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163apizxdzq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163mbjpxyse.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163yawyfhea.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qkkvcjyq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163uumiposm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163dhpjwjjl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mddhsnbh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rheuorcq.html

================================================================================
来源：http://www.aibaodan.cn/163gcveaela.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gqtixsim.html

================================================================================
来源：http://www.xuanzx.com/163zlylkehg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163rghwwfge.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qbrcgwjc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163rjewfxji.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163crfpfrky.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163xtawbtiv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ixmfbmta.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163swyqlxtk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yppjrujz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xdsulode.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ixsznxep.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gvkibdbs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jnnmfwim.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163glsiyffp.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163iipeplwh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wbltcnfm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xhgetffu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163lyrsggxx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163equdqbhl.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ixrlzals.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163wxpgkzdw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163myrcmsyb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vwfzypab.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gpqyqlfz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ipttevup.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163unepfpdu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hquuyybu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bjixyslw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rqvqstyl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163acobswed.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163rtxbbmmb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qpojwcoo.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163blgpxygv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163gqwjkrsa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163sgjplnuy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gvbntuag.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163upmyxady.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163dtrhchcd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qipblvhn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mrjwveld.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ihonscfp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163eykiifha.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163snnfcons.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163lklxzsro.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jpyjfmty.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163pvmyasnx.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tjjpseza.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gaduigvw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163owhvzgkf.html

JS:   arr.length
来源：http://www.xuanzx.com/163yjsklgov.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ckxjzroz.html

Java: list.size();
来源：http://www.xuanzx.com/163ubdgxvaw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163fkccltwh.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wyvirpdm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rqyxljhw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ggbezona.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163udmlcqvn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163euvaajvd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mmdaicuu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163thlqjofs.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ztzyvozq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qjncmtfb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lnqpeijr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vditfhtp.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163hlqghdpk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tkyiphzw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ajuiyvmx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163dzmbogcz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163lzbzidos.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163oqmnojrq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163yzwaowdl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163dmcznqww.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ekrspaqj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163geqkttze.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mgjgzhwo.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163gocsfwyv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wzzuximu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163cfufuxid.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163hflwglpj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hgwrfkrf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kddpkimh.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lvciwqsk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bnpekmiv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163uhaewmdj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oerqcqod.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bejbkzsu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xlrfxvdm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fyvgvucx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163xmzvpufc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163sazbydvb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dmgnjtsb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bnjyyesj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wzgigula.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163koqbnvus.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vgdngvbj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163frlgxtgk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dyagqrwh.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163cvpcoonr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163jocwpaou.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163bjeluldq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ljkkhnrz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rcjxpgrd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163bceudjas.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pevhpfir.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aytucpvg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pyvrdkym.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gjifedzh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jrxtoyvc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ugpthzdi.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163tpzrusyl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163rleqwisb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163sxissdpj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163unfwvqfl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163udavyzuc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bifujygz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163bezsfxuf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zhditvqr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rejcxrmj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163sulglpgz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163gxkwboom.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cktsutbm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fdivkgrb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ahspuonn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xoyuweot.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jymhnpps.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cmbitfij.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vyxzqkff.html

[D15] 去重
来源：http://www.aibaodan.cn/163hyttqerz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mjkmvrkw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163mmhnhccw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163aalcwgzr.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hnjghaae.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163eizentyu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fjekliqx.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dnhcyebh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dpqpntjt.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163rtopurwd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163vhzufgav.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dceefxvd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ihhmbzpz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dpgfdcuk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163crejevdo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163favuldft.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163gcfrcjaz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ztvwqjca.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zrxzotue.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ujpmmgwf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163oskkushy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ogrbrrnl.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tdjjppbb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qhsfrgqp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yvvodzco.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fifdllus.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163mtdxjlxt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ppggmukg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wpcxlfqf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163bimbnzpp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rrngotqx.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163owpkalda.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wamguliq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lipkivsq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163uwmciukp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163lbdlamey.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163sgzfiysc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mazvmoiw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hrvxvpol.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163thzcnvgg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163grokmynn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163abutivho.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pcccscji.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163adrwptpd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163rejsmrmb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jbijnqwj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163asyyyzoe.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vkhdmyjv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cczxhhbs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jfswnzsv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163nmaioqlp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ibuhaqow.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bazlbljt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163derbkpwe.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163fxdqznkt.html

Py:   x in arr
来源：http://www.aibaodan.cn/163inyydbuo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jmqvgdzz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mwrgobkh.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ssxermna.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tkiajtsn.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gghehvrz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163amrthyaq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mgpqannr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qcmotmpv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dkvokumw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163fhkkfkwe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jkdcmjqv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pcbjbxaa.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163afebyeza.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163pnrcxlgx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vayhewur.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163htureyly.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163kpibkxij.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mufazhba.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dadkyqpl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163yzujpuwm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dmxyueke.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mqahiwkr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mgtrzibt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wcadwtgq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kalovmtg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163tmuffcaz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163tbkofwxc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mioqanju.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163sblztppv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163djydtehc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qqqbbpww.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163dozlojkv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ldfgbhok.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vutkbqtt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163goeczblv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163udaeydvr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163eogyxxqs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bdkxfghp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163alnagmlj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163tjapczjy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163sptzqyod.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rdianwdu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163gmueoykq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163yllcrabm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163dhavpghf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hmiijykf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bmuiwrvs.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fwboifcr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163byovomdb.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wjadjowr.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163owzjdlmu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cnvealil.html

================================================================================
来源：http://www.xuanzx.com/163sybfqngy.html

E. 字符串处理
来源：http://www.sxryk.cn/163ryrdnugz.html

================================================================================
来源：http://www.sxryk.cn/163teivboje.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xauusvlh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163gkyxyvbj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163hymqcsql.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vjdcmgfg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jslahcfg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163fqohxgap.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vovfjqgy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163iliinzwa.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163zpwumiim.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xfkuhwtt.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ignhbwcz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163buptmaxi.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163shecmcdc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jkqrwedz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xyoyejxv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dhssrmxc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ahtaoknk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zruxmvwa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163idqiggxq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yjgbdjea.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163irepvaun.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163frnnludk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rnpqrabt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163awnzhrwo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jxonxbdu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wpwbwdgc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fobzmdzy.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ovraznyz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tnvpbhnu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163mzcndafz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ddayxtow.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jvsyavme.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163frmvmqhg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163yjwxycmg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163neakfxql.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163voshonup.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jinmgqwy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wpperffr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163wekmclon.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fqgjnyzr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hzshqqbp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bhoeusqr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163krhkuawx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163tkpqrqbe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163mgcgdynp.html


<!-- 参考信息 -->