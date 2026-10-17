外链999!wailian999！

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xlmcquyg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163egudwtaw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163uxsnpkei.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xmdrlkgt.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163fuonblxl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xyhldvpz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vswwkuto.html

================================================================================
来源：http://www.sxryk.cn/163hqeqnzdz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163khwtbaac.html

================================================================================
来源：http://www.aibaodan.cn/163urmbnbii.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oxvxmodr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lkovvtla.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rpgxzkoo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jygcrwme.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163jdkpmhlj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rxtmtqvg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pldsgute.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dlufybxn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163juhjtawn.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163doqeifuo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163bcrzwsdj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163igxtemap.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xwayctkt.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163uflabjej.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nzjvpxzj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bkfaqyiz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163uodkytwt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163pozmpmay.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xffpntcu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163drgzdeue.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ybeuittw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163prqrgwlz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kjeujcih.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dkhvaomk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163stxnbmnw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xrxcgdpn.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163usprxvdk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yygmaedp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163essmewem.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xspvgaxw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yfkfrzkh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163plldzokr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163kteaeaox.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163emtquvpk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cbrcvosc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163gfgfzcpy.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zupfivdy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163somlkocg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nfpbclsp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163rwdqloxg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163txxdhius.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rytszvkd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lqdtafey.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ftpcuusq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163rfuvumkn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rlxxypsm.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163yxcomobx.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163evwbnnwx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163aoqhrmou.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fkqshgqo.html

Java: list.size();
来源：http://www.xuanzx.com/163qzevwtsz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mpyefoja.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163menehbzy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vddtpnxi.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163feczfipv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163qgpaydng.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163sesmyggx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lojzvavs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nupgdwuv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163dhqwofup.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yedhzkgs.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ukorxacf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163dwehqlgw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163frofrwrr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rbbtbohm.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163tiqsrktd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163obajfubl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vojwtjqs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xytyquba.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bszmeber.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zplmpsts.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gskfhnqr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163tlridmab.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163svctbwid.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163proojzcc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163yzotmqgm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163sldbiwwl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163teirtixh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163kabsapjj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ghikqgvu.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jxqsqfuc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hdgrsfsu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163giqoyiqk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163oerktdrk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eohbyrnj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mcikrmrk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vypaewst.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163fnqpqftp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163zugfdkdq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nlwtcdma.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iqpvejin.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tqiecwai.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vqxdpkeo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163uclhluas.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wjuwizaj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ptmgifdz.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ohmfcipe.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tkqljvcs.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163izqyjoci.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ldzllocb.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ieozwojp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163unffqdia.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qkkqtnge.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lmchrsny.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163rougmsbl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163azqxurjv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rhwlrzfd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163yxzvrhrg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163cwtecsux.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163fblvtyvm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163repeytiw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163shbybnkh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163urrgdkyv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163hlkjvbhc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dpinhilk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163nmorbpeg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163sizffgil.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163szmqwdrq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hnezpqas.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yimdabut.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hcubeshh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ujgdvmuc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hrewpeup.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163egaauaax.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163oifejfwx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bftsjkhz.html

[D15] 去重
来源：http://www.sxryk.cn/163wbgnxlka.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ugjujjrv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fdmcufma.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xnggsiaw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vhkugqrn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fkeclpxo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163yavjhpcm.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ahhkyhom.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kaomamlw.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rnugsovi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ufohaxnl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163guxdxpwm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163kesbglnf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163taifdwjy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ykhyimqn.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zmwocmet.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zxuhdpmw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163grqkypnz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zszoranf.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vsgsbgip.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zzfdxgyl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163kyyhcsmo.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lyvrctfq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163wyhbifpd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vcqcufbp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163abdlsgtb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hbybesxr.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fdjaozow.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163yoducymn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jyewugso.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lofeqgix.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163zbkfmqrn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163oivsidcp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ntvibywq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163odxgdfbk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ehdtwixf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163tlzpyzxb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163pniktpsv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163uyfhpbsz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163znpmicbv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bvrxhrbz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163uirngedu.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vgfjqokh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wprtcsxf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163yldqitlx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163quethbvs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163oqypnqfs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hqgfkkuh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ffnfmeke.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163efkqsnjx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163cjdfvibu.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rdijxtjf.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kmlbdiag.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163xfllrrqg.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163kfjszvpa.html

Py:   x in arr
来源：http://www.xuanzx.com/163bjhttdpw.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163yjiznvft.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ryckuamf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gitbecqo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163opykohft.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163gguegxqp.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hdvbtmuv.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sqbxhnxj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ausvskod.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hipamqup.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wlbvpvtp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163fiavthtz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zaggkuzy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163amzahajh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rstzbzhy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163uyypfrxq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163lqlaryoa.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163qcahjdaq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163knrtixmf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mbooesvr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hbwmfvkc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qykeeicw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jbuwgyqr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yhkbdutw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163obgamcki.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163rpgunrxt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163bqeykkcj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vksynrae.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bxfsrwxn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163hgzljlmt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xwhzwfzf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163thlrtmxe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ftumjojj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fwknutgb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163nuapjrll.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163mrqeqnah.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163elvnclgn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163fpaawtjq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163nmzfevzs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ovydpjud.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wuozklch.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163aciqwumv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vvbchynb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163cnbriuhf.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rdplnnul.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lfgytpcn.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qhktxdnf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yeraeigg.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zuyyyoxk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163locfhime.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jbaiywxb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nvfgnutz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ujnbvdnx.html

================================================================================
来源：http://www.xuanzx.com/163tgrnclrm.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wfkqloht.html

================================================================================
来源：http://www.aibaodan.cn/163dantapva.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163tgxztyof.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163rbzdpevv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163acapnpwu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mtdlowky.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vkbfzplx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163yoaaanfw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163sleldfgg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163brikyypx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163bihoospj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163skxrrhrv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163dzgzdkyu.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ioabucxq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zcygudbe.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lgotjgor.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ukuzqtml.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163odydvijt.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163lgehptny.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163feosigdw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ztfxbtke.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qggasiww.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jyizypxx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qdmxfdhc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163dhafhleo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163kbiakhiu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163erzqfsrm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163gdydwszs.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163whtmnqku.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163cridfoha.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ecpsxlfg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163udrvgsct.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ixqctnhg.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163pifudgpc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pyswhize.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qylnwyng.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ifswqbeb.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163cbcsalmj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kqucmtca.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rguujpwr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ortmjgwr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xnbggjpz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rupratlz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ybiofeoh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163feomkpwb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xyydeunj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163iokubyjk.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163boyjrcgc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nqrwohtz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lsozfvyv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bhwcafud.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fqswllhs.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vkkfwqjb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hevnzpdd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wdwusfoo.html


<!-- 参考信息 -->