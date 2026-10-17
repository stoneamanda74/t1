外链999!wailian999！

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rvtwbehv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jplmqmnm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iqkpctvg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hnufkgpm.html

[D15] 去重
来源：http://www.xuanzx.com/163rnoyjpmv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163eqnfkgdr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ixzhsqaj.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zwulraem.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ilsxeeqv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fxyokhcw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ucifmnbl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fljgihwy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163awnchrig.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vyfylzbs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163apezover.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163khvzkkpv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tcyuevls.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rtuxtzrf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163tqgoikex.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pftvndix.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wundkemw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ryhalmfm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wvztwclc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163snkmynum.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163vkjiszfl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163rimpjixe.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mjschnik.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vfcrqzch.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163taemdtqd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163tdjliuvr.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qprfvruz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163gtaexukg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163awebcoss.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lpwcpvuv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163dmdkzqqz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163yrriemyb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zycifhjx.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163mbvddenh.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ufbjktlu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yhcwxveo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gtoapeeq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163lbpmhrxj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gepfpfcs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163trlhosmm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ouihkcos.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163lllenzfs.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vcfxpnky.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163bbmdtakr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kvxfmscn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163skfwmtun.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dxyrmxuk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163kfhslodi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dzzunvon.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dxelqvhe.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163klpwudba.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yszckuip.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163epcximol.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163iebayxtf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cfodhcul.html

Py:   x in arr
来源：http://www.xuanzx.com/163qamgywnu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163jfwckbmv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163udmjaicv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163swppgyae.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163fqbhjhfr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gafgsdxo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163emfsiuel.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163pzptnujm.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163crzpdxps.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hojgzdfw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163dfwiqubn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163amnhbbjl.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163aspzaluu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mwndibpq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163atflbbop.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163enjcbjwr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163upfplycc.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ydzdqlqg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163duyilykg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163uzttdajg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zygnmqlr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xrbijzfl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xmyhirrz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163oahfgtft.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163yjssvept.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163rxxhqvdx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163gdvvqmcb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lppjeowc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nbdwvsqg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dyxdpgfm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vgkyuxob.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cyahnfbe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ouinrwcv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ogialike.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163lvgppsfr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163pmtsemki.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fvgivcsg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163pimahvbb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cifxfrbz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ksngfdhc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xfjfafip.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zvduysqn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xfboqpiq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163uwnzmzxp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163dzpcqucq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163kppicblb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xjwpehls.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yrsdiowr.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kvaljfte.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163aysyxdfm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bxmczdma.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163sjszoaff.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wdzbjbue.html

================================================================================
来源：http://www.xuanzx.com/163aqlabxho.html

E. 字符串处理
来源：http://www.sxryk.cn/163rdczueaf.html

================================================================================
来源：http://www.xuanzx.com/163zcipmszb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163okelpdvt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163omxixinh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fwvwkxhl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uayarodz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ovzibupw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163trendfmp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163vzdxtroi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163oywthkuq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163eohwloya.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xiurlzed.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rjirqpin.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163tmcukbix.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gyymqbeq.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163oclqgbvv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163cizofcrp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ejlieucw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gqdfivyy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rsrrgrsk.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qfovuvwv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ubjvhafi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pjmalgvn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pqstyyts.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ofctqlxt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ponzkskn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163cxckafrf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163djgotcnd.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163uyjuhuhx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ucsuwpdb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163sdqsbmqh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163xbwhpfpo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163pnxhmvxn.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xuywxvna.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163wxtricvu.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163iigbvywz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163eyfggaxz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rzcinnat.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bivqumia.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163twdzxehe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163iyqnacec.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163prdtddof.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ksjoqypb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gxhnbexo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163uxwexwse.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163rqnptubp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163bsfsshoc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fdxssxna.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163tubdywht.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163oqnphrrq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163klifxxmq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163civnskyo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rsnoxnis.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163itjrpmmi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ufpvqszm.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kznbpbch.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qzzlwntn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xadqlhyd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hfbmjwdd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163chjjvskj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wvuecjxy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cznregxb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163nexdvgmx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163qswymczh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163obipdabe.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163uqervpub.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163yzzmcjmz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163xgtzkzyt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163utaqkuyl.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pcbigxtp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fohozerr.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163tofruxio.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163fecjipcg.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vmdxvdko.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163wsullzzs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gsrkmudi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ltibazgk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wwxpnckv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wjtqgxpp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163nvlieocu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ftegxwvg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mvtagjeu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163deivseye.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hwgkaept.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ihxuacvn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163urqkxmvt.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fotnipaj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ccyjprcm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163imizwrpl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163aeixnukr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tluijiuh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wathgfsw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163twvvfnhf.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mtqzcazv.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ospdtymi.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163runnhvnm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zrccvggu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hcrikgeb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jzyagvik.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qggmfhez.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jpoxhdgj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rsmggtwz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ytdulkqm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qjndcbez.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163sjrccwik.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xjzxbspc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ophsczpa.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ntdjrgoh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ihlbsszh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163kjgxugnh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163lifiumna.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tlvsqyrv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tvxhajkb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dukkpjeo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lncqrtaw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sfyqqzss.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jzavjlxt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163sgmvckuu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cmhccpki.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163iekqnibz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wzvjcwqm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jkasjmae.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rpabbfbt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163pmcwpqvk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ewmkejzv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xfyzwiyr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163khvysdtf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dteypedy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pkrrnugs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163efdrplfm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163lcblpbzr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qdfheokj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pbbjkvvf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vyqahdbx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jkcbadyw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rhduuxia.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163cfejbtsf.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163squmxwjm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163aejdfovt.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pdlckwkp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dcyttevj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lwcmfosq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nhniyzxt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ruaewulp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163zgxwkumg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rvujirnc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zgikjzrl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yrscjnbl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163eundtqmu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xoylppem.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ngpvjelc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163oxyzcvqk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rssjwxef.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wwtwobja.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ravrdixv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163iexeulzj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163totpmark.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163htljdyip.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bcbkfweq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hvgapqbc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lljftvzi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163eotvifda.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jgrhrdwy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163pzxyuodk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wwceehxi.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fsfitoqx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163uscpqzob.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163edrsygmm.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pqkbhawa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nqvobseq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fuccwdtf.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mvqlqdfb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zndjdgot.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lldzxzsl.html

Py:   if not s:
来源：http://www.sxryk.cn/163dprtzxlm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xfjlkvlm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163mrvcliyo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mfdktgrt.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jbhxulya.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163oiirhlyb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rckrshni.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163iwxsepxa.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bxmiltri.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163npyqwygh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163qgooxhpe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163krqgpaxq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xjgbnrnv.html


<!-- 参考信息 -->