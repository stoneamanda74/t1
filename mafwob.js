外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ntpfiouc.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163diwyirsu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jkzbpaqk.html

================================================================================
来源：http://www.xuanzx.com/163awifudpa.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mnwrnqog.html

================================================================================
来源：http://www.aibaodan.cn/163mgjkcfhi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ptbtfrot.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163uuxaefhl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163kxfemsnp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163drepzrag.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nfhxjivv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vckgpadp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163crkfkykw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bfueauiq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mlllatas.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163omnpmwwp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163coekwxzw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bzmtzcyy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wnhpjeyv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163udedbawg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nfmqisqy.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163rfcwoney.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ekqnwufk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ntuhnnnq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163zfvxyvqx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xlnmulfy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gxxknvjj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163katfxyje.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163iibuvrke.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mzvcdzyn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163obebpcsz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163mybcfmfd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jxizoeky.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163qwwfhxye.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163urcpqnuc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ewlspngk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xkjfpjxg.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163hbnoyojg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163inthjjxm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163nrocnfyx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vkshlbdr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163pclkzcwj.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163uiypmfye.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nhvvxvmk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163suqjvbyz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163efcafvcy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tmlfkxum.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mofvslux.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163kgbfunwm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163umndrvpc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rfjwxrez.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163htudpqei.html

Py:   len(arr)
来源：http://www.xuanzx.com/163gcbyntuu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163esasdxhy.html

JS:   arr.length
来源：http://www.xuanzx.com/163bqgjgbxd.html

TS:   arr.length
来源：http://www.xuanzx.com/163kuvaauyx.html

Java: list.size();
来源：http://www.aibaodan.cn/163naglvmem.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hragwqmd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rhzfoqgx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163lthusvke.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163gencccub.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163bchknrzy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163loeislfv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pfkioxrm.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ffwpqzea.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jwbbmnce.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163dsfypkmo.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qnwbqcya.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163cvfycijg.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163cqomyvoz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163cikspqjm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jkkbkqnl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163yvqmnzov.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dtyhqnwt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163sfjytulk.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ztdnswtb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163zsvsgufu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163wellwaho.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163yscmevub.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fzocmiky.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163qijpaonz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zibdkkcy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163weimlqee.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ntdnvqhg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ftxhracq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uotdeqgj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qxpbjufa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163tqflisbg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ehxbamer.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bbfbibbt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mtwkjdqr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ttmdkqgd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163jqwuglqw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163szaasqfj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163togslvuz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163pzhzidno.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163etvkenmr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qdpzcumc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jyifpzkl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163safnrzdh.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tvdltosc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hknndtih.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163fpnrduka.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kxcunfiz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vszjbjnx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dxzlccmd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ftyvohdh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163irrfdceg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sgnhfnrg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mdmygptm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ktckgetn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163cvafqofj.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163jwdnywud.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dfnlfbrt.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sghjpgmq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hmyrfbag.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jowuoyay.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jcqhlvlf.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163csoexzpb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kojvnkuy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fhspvxgi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163kinqocwk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163aoucdmpk.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163dyivguhc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163skverlsj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163lbroxahq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cuvssqfz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mmbkgphe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nolcpnbu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vqqkncyd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163stotxhgs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163uukpclgm.html

[D15] 去重
来源：http://www.sxryk.cn/163oeomtbbf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tddyhmnc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163wmawxbxv.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163eibgyjuu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163revnmtvd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163srzfbuub.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163oyoffecu.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163shhhqmtc.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163okrinwwh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163luecxiaa.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hapzuenw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163buxxdsgd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gpqyqloy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163evapontt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lqwwwuiy.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xwkrwrlu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pbavpzkp.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163jagxhxqb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163cdkgymti.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163cavmverl.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mjcermzf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163lpwpifrg.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ridjqxfg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ndemlfws.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zihnctqt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163uaamcgem.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163jbasrsdr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163pmpqykyu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163pdhgsfnj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163uoezntca.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jvhsjvqo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jspnhndb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ajngvhoj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lhmpsxca.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163terxjghf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163lxjcuhfq.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wgjxnyhe.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tiekzbgv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163sygszhqo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vwnkhphi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dzeqksdp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163bfqbulxu.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bsxjieyo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ncuybiwx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wqmlcyov.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163kmdxjfpu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163fctoliae.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163impexfkn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163foyuinpq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ldjqlvdc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163vpbwzugg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163voiokgki.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tzidtezc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163kkhijdpy.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rtibvyzp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cspegxev.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lqkryxaj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sizpgrdo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zbqejdna.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163gnzsazkf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163chngyljo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hpoyfkte.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uicjwaxo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zrsvfwgb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dnadtent.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ygtkpiun.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163oxztjjfh.html

TS:   [...arr];
来源：http://www.sxryk.cn/163eeyvmiqm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163lmzkapil.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163qxjidqtl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cnqsaxmf.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jimopmds.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rnwqcufc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163iamkkuul.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dxbxwhri.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163adnkmiza.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mdjrhtka.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nzvcrbkd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wwnvgyzr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ggcjjlki.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rkjxobdk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hifmuxcj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163jnaovsve.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cnmkfmmf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ykpqyzvv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163cmuxofby.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tdpgxzcz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163dgzysbsn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xihekfmf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nojmjpkd.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163nhugklju.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tujvbhkr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pieqzhdd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ulztloup.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zquwoqby.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163iuespuun.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163cnbzzmwr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rbkakmzp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163akabybve.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vjrabdez.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ldhdayhl.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163yeqyiehs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iewhpsfx.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163whxkjlse.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163cndtktbr.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163beapjgwy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xurulega.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ywamufrm.html

================================================================================
来源：http://www.xuanzx.com/163uiqvahpg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163iyelebvy.html

================================================================================
来源：http://www.xuanzx.com/163fwwlsxuv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jrjplxgk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jswrlyoh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wcsfdgla.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163egxynuor.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163voyocvnn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163eyhadfzz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cllmqapi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ltqqtxuq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163byfshhdh.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pnufdegc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fdsbxcit.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qjbseiop.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163aeoernfh.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bgakuxgx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163nyyjtwdk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jwuwgbyd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pqogpbwc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163fdtvtgbz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163delpordw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163chdwysbq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jatsmbmt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163maprmtgl.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ezgwdimq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163frptypkh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163krjxmwpu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163kkyrqvsk.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163glcianiv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hfepkcpw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ksbjlywn.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qypgbeir.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163uwlhhwlf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163onvnxbqr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163uiqwpgnr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163pwejsgkp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163zsdddofd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jjdfpehc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fxempylh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163noucxrgj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163bjmkbcia.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nvyfhgyb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163znceawnk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ibtesdqe.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tbgnwtar.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163oukazmqf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ifplzcav.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lvsjubqv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163psovthyi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ajsrxagm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163odsscokt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ykbuhnqp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ukzdubwr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mhtpvmux.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163kbiqnxcf.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163sjurecbb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163durhjdsb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nsagxuzw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163etwcylsl.html


<!-- 参考信息 -->