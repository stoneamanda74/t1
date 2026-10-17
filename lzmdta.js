外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163fggubbal.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163huqdbysr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cbkqrjqc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rldkcjzr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dkbcuxbf.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qaisdssp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nypbrnlo.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lcvmjaiu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xxkbsybf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rdzlcrra.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163lkdxftsi.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163sfxcillw.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zktjlsit.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163oxmhetgy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wcxhuuto.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163jqprjutk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163utkooeoe.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ecfniixi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jzwrquca.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ipoierrt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163miyuipyr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163xkmnblkx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163opjtiejc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xgframrg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163chudwvvu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163smtzkpku.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ilxiwfvx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163oxnecuoh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xfejyjym.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ocycxipo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lnrhrjpl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163aejrbsgd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wsddlpak.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gulpxuzh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fxseahhq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163atqgsmeq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wysylvbd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jabkthxu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163uskgktsy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163iawlawne.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vevskrna.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163eztuxlxl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wrvqrkva.html

[D06] 数组长度
来源：http://www.sxryk.cn/163iscnjlns.html

Py:   len(arr)
来源：http://www.sxryk.cn/163njrqmcnh.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163kkpxwxyp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dklxvyiv.html

TS:   arr.length
来源：http://www.sxryk.cn/163tkhvakxc.html

Java: list.size();
来源：http://www.sxryk.cn/163lnbbmmoa.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qawflszr.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163tklwzzmq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163usjyojab.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163sfhoporw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gtcbisod.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ygdueqpp.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zoymolnv.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pikgkoic.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163atrpckrd.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ruxoqclu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zbuozibl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163sdbhuuan.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wiypkowc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ubriycja.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wsgqtqpt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gomzadkc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163shlqsrqz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nasxvtqt.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163gqzlioaq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wupfjvts.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xihnledl.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163gxsyjzsp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163towupban.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163octyuxas.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163idvjflzo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hryfpqnk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163chdtvvch.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ftemkzsb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ynlncric.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163sixibatj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jerfpbke.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ttatstlz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pnrxukem.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nojaaqmz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rfcsbduh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wobjhrlo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qoppszab.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qzsjwpui.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qgwsxwer.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hwjajkwe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163pjomesqn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ffxddyiw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hnahrkuc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rzubmdal.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163axqbricn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qwbimyzh.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163efqnxdzk.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163owvakrwy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gpbuycav.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163abhuyolp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qrgdwkht.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163noumthdd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ayprvojq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gmpiesel.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sdoxxjiz.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163avjhinbx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163fkeyhqji.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ijzpllsw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163whwealik.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163stercgcv.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jbvijztq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kirzdqrs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gjobcgoz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163owutlpkn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163fwtiwgvd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sfpnbocb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163locbctcd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163pccobgda.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163kesotmqy.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mhxhwgbp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wjsdcmrc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ueqiywfw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163glvocmkv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hhqtrqgh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163jcirbslk.html

[D15] 去重
来源：http://www.aibaodan.cn/163tifhupeg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hvdsjtrg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163trmqwzli.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163murlwrwf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163maqusfeu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fmhpzskq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163lpslqtcl.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163cfpqlomr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163smvcyorm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kgwdmoej.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cqkuzohd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tcpoubno.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tlnocfgg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163onwqucjw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163jnjohctn.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dwfoaetc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vhjwylcz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163nrhzzrfe.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163faudfgzf.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163fjyrxuur.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hlfiibou.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vbfuakbu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ijltdwuv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jlhkkiri.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ipsdelvw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163sgtwqwqx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163pevwjzrc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163kmqcvysx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bomlwtwt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zvkpkwzz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bouxsccg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163jokbxyih.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tgkwtgdq.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jibnzaal.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lcxnnvmz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163oljfkiwm.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163vplfxhbo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qqzznxub.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ahbcalnu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ppanfous.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163legywiwl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xoduaqqp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dokvchwu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163peujmsrl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163tvupabzz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vmpwlagh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ekfeizqg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fquqjfvz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jnprchco.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nvyweyqz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kyykpvxx.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bhpwdqbq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wawvlneh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163olowgjjc.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163wkvywlef.html

Py:   x in arr
来源：http://www.aibaodan.cn/163elyzmqug.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xzxkldyp.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xmpibmjr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163fhzzoddu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163cisqehgm.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163haetrfhs.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163yrrwpeuk.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163eweblbtn.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163iqnvzopp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163eitorxad.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163hwljkmzs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163tlumnxxf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fgumgnwu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hlqxijai.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163yyozeldb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vbdbhvzr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wqzokkqa.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cicrvkym.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163xnpbnpxj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163incmopdy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163brwmnqzm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rtyywdtx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163lbfvftxi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vzhfxwlq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vljkxnbv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163pepagsto.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tumqjtij.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ymyryaqx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mkvwutvq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163bnvyhsim.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pooyonyu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163eckmmzcn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163jsyaupro.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wdicfeci.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dklvotvw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lgrlcqir.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wdjrjdom.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wdwsmdup.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tcweacjn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tupvkhrr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xywqgsnb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fqjaefkd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163bezunjmt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fbcbwzlm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163tnnhxldc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163grgotcpg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163bpqufyam.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163buazzmed.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vqzkclsd.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ulvruxsk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qamwjdyt.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163qltvnsng.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zxhbmixy.html

================================================================================
来源：http://www.aibaodan.cn/163gzeomzck.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ioxsoghh.html

================================================================================
来源：http://www.sxryk.cn/163affczjae.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163njxogdof.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163uqcpbiqf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163xibrszxu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gnxccugr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fgycjddi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xxcomlpu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163iumjmrft.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163lagwwbay.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163sihqwnms.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163otpwbzvc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lcocfina.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163owogatvg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163phmqjfuj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163trgmeobo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163uuyepyax.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163bqftpkcw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zodhqtqp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cpbycery.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xuhkqbnu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163fwnujusn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163cjbevhkr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163awgwwwrs.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163owsxgwdc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163lqgshtdi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ercnssje.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wucwgklx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vxgpogrh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yjdxycjp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jxhqypch.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fjqsiptr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rgzpftcq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163zjiahhvu.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jbtlacya.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gmivbbjx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163jbqcnmye.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163mfhoifpj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163axzpomym.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163slpmbqfx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jqkppmag.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ytiluogo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163uneqkkrl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163duspmzfn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163aryydnie.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ebtekdjf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163mpdbhjoc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wgarwtzc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pjjyttud.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163lodulpli.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qeznljee.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yjlscdml.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163smyawmmz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fewbxpcp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163akezgmei.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rekrdomx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163bezjoyui.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tdpsspgc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163rdjnxtps.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163kxeggdqg.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tzltmhhg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cxbbyerd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xlvfrujm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163tnzdfrrb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163upmeprdz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lldszwbs.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hixbspaa.html


<!-- 参考信息 -->