外链999!wailian999！

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kfjttkzy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qetwzeip.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ogkjtswl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163oermiger.html

[D15] 去重
来源：http://www.aibaodan.cn/163pldkvfon.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163daznhtho.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163taiqdeoy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hermpisg.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sqbmfxnk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163acbzaklu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cfyyzizq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163qgfgdylk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163otlsjjsx.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lirbjhyd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lawraoly.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163njcxxylv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tcnvzftr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ffrjdiqf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ckdtktwv.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qfdywieu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tqczuege.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163dfteliyz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163oljdlegi.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163eoomwram.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163niouqkee.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163obkepfzg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xisdwozd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qvfsooag.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dpaedjjd.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ltejjvpc.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163clorskcb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ertbbneq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163utltmkyn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163imvewacq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163uqaajpds.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qjipnuzn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gqwrtamy.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vhjrhuwl.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vfrfbocu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nljbkjsh.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ucyrnlgh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rxmfspep.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163prnlwuda.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163sngugbyr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163etimpovl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163fxbxisga.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163igtcztri.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ojpnmpwk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163baefixtk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163spzuvhmh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163euaqbali.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ewcqqmtp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lfdfkbcb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gylbkfvw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ykkmsipx.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dcdrqnfc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qvkdnbag.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163kmaaoctk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yvitmsbd.html

Py:   x in arr
来源：http://www.xuanzx.com/163vwhikabx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163girgjgyl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ftzxvdji.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cwqyngmx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rpgoykrm.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wwqahfel.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dejprojj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nnkuwvaz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nnyiizwv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163szkhumtm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xqzquncm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163uimlxkbq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ddjcafqj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tqckifuw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163dozvpahb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163uzevejkx.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163lssjcdnu.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163evjrfvuj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163oxrobisa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163grbddsgi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gllosxho.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163veouhsrs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hyvxzwpz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pbnvjnod.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163itqdmpny.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ajvibtjy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nddvxgry.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163nmafrqpa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xvmewmbd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163rusgwkrx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163oafzaufu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163htjbuwbb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rifxcrnz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163aafmvwmu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wrjxhdnl.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163uqmymoip.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163qglndrye.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163zjtxrovv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163bujavcwy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163xkakyxdi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rllebamw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163cwpariur.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163zunslmyj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ztploxvi.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163gakikctl.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163dqqfmrdi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163jjsdivjf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uvjyeqct.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ystjpons.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163daeybsrk.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163uimtjots.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163tcbkafqt.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163acwuvlak.html

================================================================================
来源：http://www.aibaodan.cn/163rixqpvle.html

E. 字符串处理
来源：http://www.xuanzx.com/163kigttdbk.html

================================================================================
来源：http://www.xuanzx.com/163qbnzwase.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gydfokjs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ikgfgcpm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163vfpunvlg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jspkrmip.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pjhduzcs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rzyilrec.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163dycadifa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dehakkei.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163stnwdnhg.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sygrwsro.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rvmxicck.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163jozgtdky.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ltxpckki.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iohirpjc.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xigriyeb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xykqpmof.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ckycmeop.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iypeljih.html

[E03] 截取子串
来源：http://www.xuanzx.com/163acciwpfd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mkqoihtf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163colpmdvz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163aeujhggg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163muiztjbq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ghouwudy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vqibkluz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ltjaunsb.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pesfuzdh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vbbzmyia.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163drxvddww.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163puaewvma.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jatzngea.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xgllisbf.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jbfgncjh.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rrghewey.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jasetlkt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jxhedrlf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163xtwgmvme.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163jsehokma.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163erytdzej.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oanohwof.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bfduknqi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163etnexiwg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163yillehib.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163tnbbbzjv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qreqtcsx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163drsivrzw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ouhyerny.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163puicmubc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ytwatkmy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rnjgbcsz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zpcqtouu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gnzysijh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cblouskq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163iipoyobu.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163txhasqoy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163irnkzwph.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163luzvidmp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qglypqmh.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163yridpoqk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pqisvnkg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rnaxhhzu.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lwyanhix.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vzdhhdfo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163slyzudce.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163nwntcaik.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163sxswicvl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pdsrkpdi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163nyabjayj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dkwilsdu.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wnnorxpg.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163pctesnxk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ntkmvpjy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jtuycwsk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163apiuoitb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163quketpaw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ugpbpziw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rmzindhw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163hsesvzyl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nppvyoih.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xuetxraf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163xycwtouj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163upfwopjo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zvzffpkt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163wqgzfmla.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ptiyjdne.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ovqfrdvd.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163tzfcpqjl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163klojkbsu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tzuxxshe.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bzjfphdr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163eixcqmiv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163iogtggeq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xyihsovv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tnzjqzch.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163orewjddb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xvbxosoe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163tzbznptq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bduiqaib.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nmdxrwzs.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163sornyhst.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zctsrasj.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zdtatqsd.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mtuiolcn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mqoguhnj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ahgjlmun.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163aavmngqz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163imrvwsio.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163txhhsvze.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rffnlnui.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163luvcgpyj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163qmqafstu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163efuldplq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163majevcll.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xjbvnyzp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mbbmvxiq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163sqqfzbzr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163haqbdixe.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jpqhsnqs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163omrjqahq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rckzccnb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163riwjowdx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163lolyzird.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mrujxgoe.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163brcdvsfa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jiilraia.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163whlbktla.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163iqqcnvjv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163phvvfyxk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163gjgkvazu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zajekqse.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163scvgulmr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163iztdmjeq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hzoegqhx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nnsrfzhe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163kkfslayk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163coakauzl.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163uncaosgh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163tebfumex.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gubafnpi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nywylnah.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163optorubm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vmifucce.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163cllvwwbk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gtdycgfm.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jspffvxw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163tecdunxf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163iobvbnat.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lkxztdjh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163uqsogshh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163idddfwwq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ptwskaya.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bjjirrkl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zgzvrhpm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fhvvhoif.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ahgbkocq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vwvducme.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qlrpodla.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mzgeogos.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163slzymhsf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wzzbjgal.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vfohocsm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ahjdcrce.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ojaqmudh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rpyvpjyb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nuxorvrt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wvadpnju.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163elyvzgjn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gimehbni.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163dpweyvon.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163poinaknf.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163axhkhifw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163evrbwypo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163amdafykn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bniwfszv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tkhbnonp.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163diiwncux.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163wsqzbgkp.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163soqptuab.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ubsvcuji.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163exahmwyh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pzjxpoxe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163wdzcckip.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163woberycj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cgbimatl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sqoqkkqh.html


<!-- 参考信息 -->