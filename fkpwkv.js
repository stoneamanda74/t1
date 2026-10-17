外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163vqqxtdbo.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mhscsyuu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vfflqrix.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qosjvrkz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mjrwsfte.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mfezvupa.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tqkmxiqn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163swwflisl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163gpgyxxci.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163duiouwgl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163kydjjuyn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163knkqxspu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hidsrqpf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dumqrqis.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sawtfihr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ruglqhzt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qvfvbvpz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ylmlciiu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163sauxsuxm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jaojtuqs.html

[D15] 去重
来源：http://www.sxryk.cn/163uvuopxhy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sagyrwdg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163zuzilbbq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xiybovax.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xbqoghog.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jatxprcs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163avhjdlqp.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xffjkwzu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pescbrhg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163orwvvcbq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ivshsgvw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163evtfwqxo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nefopzcl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zkgocrks.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ttaoabrn.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dgocrbgp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163mtygqiru.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163lxossfzo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163yreajkke.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ftepxdhq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bygbywwi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ajmyvlhr.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nmftwnxv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163wmpjfomo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163azknmsbd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163hekqkjwg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dtswjfzz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ebtzzllh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gayasjyb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fuavgllc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163smdzjckh.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163uygdques.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163wwdsbsem.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163nnnpipsh.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qmjivmjk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163mytxwjng.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ysjdgbne.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qcggolrc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ihsjxrce.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163tbixfhmx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fxmwckzb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xqeemxye.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163zhkbfjup.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qxlypduv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bbylilwb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163daqwqlcn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rshuwjnn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qkehrwtw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163szgsizvs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163alscvnfz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163szzccier.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gpewrygz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lemawphp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163owhlkdda.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ttugxijx.html

Py:   x in arr
来源：http://www.sxryk.cn/163xfnyrwfp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163loccpwqn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qbmiseuy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cngooopr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xaolxvjg.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163kqtzkwht.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qvluloja.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163iukmdqwj.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mpydcqhz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163thrwxvbi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ackzqdus.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lpymaoqd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ellmpzbn.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163kxpmgend.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jcsudikn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pcujpcrr.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163dmjxhunl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nbyeskbv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jwseyvan.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dsludkjk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wyukpawt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ysvixkfi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fzecknzd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dzhihepl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163njhkfdxo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tsfxlzzm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tqxwsfrh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163auvqmmjh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wacfilwd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163kvxoppkh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xtwpakjt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163loylwcbc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dngtazwo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163egfjuvfi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163peeuoxhh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bhlbjxbd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163yaibkfos.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163aewllyzj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ymdmchrn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zjqhwplq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163pjwdjjug.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163dtbvbqme.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163dkvbgkzz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zomkhokb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qtertypu.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fnrcvqoz.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163szdglfvi.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ovjbyhle.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163smaaqapj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163kgctxskq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163pokupbgw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163nfxyenka.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163edigrvsk.html

================================================================================
来源：http://www.xuanzx.com/163xjbajjmu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hxblhwxa.html

================================================================================
来源：http://www.sxryk.cn/163mwkgacnf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163txmetzqp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163adphlkdo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qamvptvq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cvmnfmcc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dpxrmsqg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dgukunxd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bmtaqptg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jrfzyxmy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ybvwyzxj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mqqqnmgn.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163uroluglb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163atlagvmb.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zgchcdhx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ewqzwxdq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163smsbqisx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hijqmzxa.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mkbymhbz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163sqbtwvlg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163cwecdbnf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163gyrdzkud.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rpnihxna.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163idrngfuw.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tshdoblz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163swkjuniv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163dhmbtwum.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zqdxxskh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163bxhzwqvu.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163fizgvpec.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ibilawxy.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rwksbpml.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163mvuordns.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163pmbzhkjl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xjtokohx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rxkdwbfl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163bhvrould.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dowfsaxw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163trctoaor.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mqxghlnu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kvojtgrr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nciwulrv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ltxlsucr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ersklzxy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163deulvtpb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163tsdyzqvu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163olhkrvvo.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163blwaqidc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kyjdooww.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163iurxszow.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yyyqqtst.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ptkgusre.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rhkzhydf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uabqxykx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jegqjubm.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qsxcwgnd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163hgwaxzcl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163niredrfp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hormausa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ilpuhkqv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yhyqgcrp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163dbknzoif.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163meofggfs.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163bqjishlz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163iotcnafc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163msqwhmzt.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wipnxzog.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163sdftjgzm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xrdmbfkw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ipnrogos.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xxjpgcqr.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ogjbdshx.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xireitzz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163mqsxviby.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wrnfhrfe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rukqadec.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163pshirvvw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wotknizv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mfbbfhig.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163yzpzncyq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zjewmxud.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nivxonra.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ekntecqs.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bsoqveiq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ogpeoeab.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163jjqyxryh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163olvxdnlx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nexkwpzj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bpaahjau.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163casfhprq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163oqhnbqhg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163evavcsjr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163piqwltyq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xaujzilq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163kfkbldez.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zqybsseo.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vzfunnyi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yzzrgcxr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ueykpfiv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163aegshntf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163esyqrfre.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qdzjygzk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vlqgsznr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163lohubjnj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zrpxowzz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163erhyfopa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nlbknfao.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hoqvierj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vhletyoa.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tdzwmfce.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163rgpchwdw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163owymnuuq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163uppnyzzc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uxxfyzmh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163flbbotsa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tzorynjq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163osaznuay.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mwxtgehf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wdhvyapg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ksqfvrjd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163uinzcfec.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rqultxje.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cudfipao.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dsscgykp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pljdxgkl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163pwfxrgug.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wtgejyjw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lfcznlcr.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163gfwjtzgf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163utbkhipe.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ynohhvdd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vqorhoej.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jhgptbyj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hvnsyjqo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tksrxsyd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163zsapjohh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jqmphovf.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zyhrpjox.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kdtqgala.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lzhsssug.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kcnlmrni.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ohqlnzrg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nqipxklv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vmusobuq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163frobgfxk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163umhyrdvq.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163oiqfsdbr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wewpkpis.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gsqqoadp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wztrdrpb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bfgleixa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163iuzpzxiw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163texcifdb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163keptgoih.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163sxekybmb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163idvcwfol.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bpsnovrs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hbroqqsy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163svxwksqc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zcwalmzu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pugkhysu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hyrbtqcg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163fwukfjej.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zgurqyko.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tqhovqzp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bbktowzu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jaahzrms.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163intydxif.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vjuxcxau.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163lpjnlwni.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lvjjvkeq.html


<!-- 参考信息 -->