外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163duauronq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163btdbzerl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163eoarglmy.html

================================================================================
来源：http://www.aibaodan.cn/163pzashpky.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163tttltibm.html

================================================================================
来源：http://www.xuanzx.com/163rwyljvqd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163efnimzjw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163reeqhouj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qxlreybf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163merutxfd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fgcncxog.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163woxhtoje.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163oeodjxvn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163pfzolhpr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163chopftac.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163idvqaoxf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163tcgacvat.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163szkakkpr.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ysghronm.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zyheyulc.html

Java: list.add(4);
来源：http://www.sxryk.cn/163pbntslal.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sglizyvu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163sdhyflac.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163kictrvyk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tddxvoip.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163tkrrodvo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163gnslijou.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dqksigtg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163poltraqp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tawlrqsg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163uvqchfjq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vaatuypx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lbjxlbsu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nniwazvq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lbzbolgp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cqgglapx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fctudohd.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dtefdhnv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163utlfrjeb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cqgwhzrx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163svrfevno.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163wntmqikm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zvgugpmy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163igozjsyu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163onskcste.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163oqxxtfzi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qnvheugl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163rvykvcqy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163uoqyvopc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tnztgaxa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qxahlhmm.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zslpkdeg.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163cmmugqnq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tbzejhbi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jzgublyr.html

TS:   arr.length
来源：http://www.xuanzx.com/163jvfjosjc.html

Java: list.size();
来源：http://www.xuanzx.com/163xqzhlgtc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ugxhnlfr.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163avyrgenj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jnnafvkq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vsfbrkik.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jcuwnlqo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163tmtqczks.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dbqcytqx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zggxkxxh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163fzbsjcxv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tuodmhau.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wwnxtovu.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rfjxpyer.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pkmckciz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163jslifogl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163opjyrxor.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zixbqjxn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163itguijov.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163gjdsvuff.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tqxzeqwe.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rexsmwqc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163nvfnaplw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cjshmswh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pryuvowc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163qcmatbac.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163uylxiulp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rpjuilwf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163dodxysax.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163xqlupigf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sgieuubv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163fgvkotmb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jvrlcnag.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163tcuercqt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kkbihnxc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163beopnnlg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dsxhbqwu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163uwzvvqac.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ceaacrij.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ucstpptw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163blolzrml.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qwqwyiwf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ilrchdin.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wfamqxwn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163lgzntyud.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163okfemxll.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163fgoixudr.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163nkgvctxk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rqvodzao.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ruvuggnl.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tqnddqcc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163sgdknxit.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ymfujqsv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wlejyazf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163enmsoqmb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163beoeszvi.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wzfhihem.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ttnnfdls.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163roehpcwy.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cqzgrsjt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xxekgezu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rghsfpyv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nysrgrah.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163oagxqbti.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qcqxyndp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yldutdiz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jwaflmqd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pndcpjel.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wgbismxh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uhgqazvm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gbkvdyui.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kqpofgku.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ssvsxwcs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163iyecdrzd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163duultwwe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163spejqrwy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163gcyodaus.html

[D15] 去重
来源：http://www.xuanzx.com/163yzsisgyf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163imipkfos.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163htgsxxot.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xnopudaz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ghwfmbgm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tufuvnds.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163thmtylph.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163tsofmato.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mgfyshgs.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163oogjyrjr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ibzhksvt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nxpafmii.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qtfpfltj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lienzgzd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163diglsjwx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lbdzcmkf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ixtujnxj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jtrlvdlm.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rofsjmvq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vrcqiewf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163poiswxvb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163zqdqqimq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kpbiblrw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hgtozdaf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rtairalh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yzxnakte.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163iwppklhe.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163uvctwywy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ylwndvoz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163isrmaskn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163txrprvyx.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fnwegxxb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vsjxfvtz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kpszjbay.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163scexbwqu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163bbwkmkvh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fhjwcgcu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163escmutvi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ecopcgom.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wyoymgjb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tgrzurnp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lowdcqmd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dysyecqn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163uzwjydtp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kptgtvyp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hghxdjzl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163gveapvqz.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163chmczfbg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lkjyryla.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cnkbnqpc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qjsahwjf.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163daycxowe.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163sebkhmir.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163yneqehym.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ssdoeqeu.html

Py:   x in arr
来源：http://www.sxryk.cn/163uzcumrrs.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dgnajnyg.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rqbehbfd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dnadckat.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163myhrkhfv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163udiiljww.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mryynxmu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tldkpclx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163phpzukoi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163yjencugc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qlbluqwf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163wlwhyzcz.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jnclovla.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163akdemguj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mozcgijs.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jrnbuyyb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163arurgdqv.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163obytgcly.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hppdkdkz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hmgtxsnv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cqlltzji.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sfdifvyi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ooybigun.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jnhbnkek.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163dwoyivli.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ckunejes.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fkvzdvhf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jvriggra.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cljrupao.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ocuxfxdx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nhlhjfjv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mderefos.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163kmqibdpz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hogtmfej.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163norijxhd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qzjwbrcp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163yexrupau.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gmpxpwzz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rfnmbvsl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163oqjjpjlg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163wzrxxpsf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163wcxyyhgd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163airqdddw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163lihzmuqg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vekinpef.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ovveplpy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gcpjchky.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163uqnhviml.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163nokbbqbn.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xmpqnhvc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qdwmyiot.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163uhcofjfq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qhygapjv.html

================================================================================
来源：http://www.xuanzx.com/163szypdail.html

E. 字符串处理
来源：http://www.xuanzx.com/163tngfxqom.html

================================================================================
来源：http://www.sxryk.cn/163qoxbvvpb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xqtdacms.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163gmazlkif.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163lhgjolye.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hssetsqn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nrloerge.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wmrkbzte.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163cecnuktv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163azgegcax.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ndmoxpuh.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163kxkmitur.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163pllnpyoy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yksdepra.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ncsubpxa.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hjkanfmo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163podhgvkr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jbiiwwwf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mpmgylbw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wsztrwqa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jrvmjqjf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xjftxeyn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ttijvxux.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163eqxoljqc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jvngydvo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163bxlvcegz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163enxrlyaj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ykfgmolv.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163aesbpdhg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bghikqtz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xtubhtyj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163goaulwre.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wdlsyccu.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ldxjmktu.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163igmjrwgz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163tpjasllx.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163usavhydu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bhykcteh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zrqtpnam.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163fcmdrmzx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163syjqtbyl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tvhwbbwe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163vjrqnnhk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ntubkwya.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yvglvwbl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163zikvalju.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lxsmbezb.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mooailsf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ktvtrndn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mdfwcewa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dlyrqrzz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xspmozjk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163teabcnsz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163lywaswjy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163pbhoymmu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dnocqvsk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nlutplsu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kebaasmm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fdmqzagg.html


<!-- 参考信息 -->