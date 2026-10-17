外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xjaeoadj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ezjdtley.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ftibneec.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mmhjxtya.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hjjrxeia.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rokxoegf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zmgzyrxj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jhmvevvv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rdtfswyx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nuaswpjz.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gghpyjyi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163vcgtxjop.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ouqdvjcg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uumkufjt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qqppjsdn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ijiyqniv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aetkreap.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ssvpibmg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zhnvpcxl.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jsouqthv.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xivniavp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rufcyuem.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sasamqty.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qqholits.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fhitritf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163meqoyjwc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jprpqcgo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ckrjezxw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wohqsaft.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vhvxlkad.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163pzxzzkuw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163byejbmbk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163polfebii.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163osrigagx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163evjbkhzi.html

TS:   [...arr];
来源：http://www.xuanzx.com/163gpzdnuxq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163qsmyeylk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163jcperyso.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hjihafck.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163awwpbblu.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ipbqwxxd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163hrsteqmd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nehmbgio.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ziakoclt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163spelytzd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163fuhvlwgd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163acxkboet.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163crsjlalb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qpietivg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163cdudfgwj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163kmgpeukh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163owoytion.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ippddjoy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ifgozqys.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qtkbflxx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vamlllhv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163dsfnjoee.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rkzltfza.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163auzfuhqf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tdoyifak.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163onfkqvia.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163nhhtukmp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163unubxutt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xmbkjbmq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ualaveiy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ekgzbrxb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163kzcfqkdb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wxldhlrt.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lzeltjkt.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163clliqsds.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163efriqamc.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hhlnbpqp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vnkluioq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xrpikhce.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jnjhsafg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wjvfewer.html

================================================================================
来源：http://www.aibaodan.cn/163pkpbestq.html

E. 字符串处理
来源：http://www.sxryk.cn/163zavogcyn.html

================================================================================
来源：http://www.sxryk.cn/163hmhniniv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vwvvulhr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uzfljiuo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vschexuu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kngvskxp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163txprzclj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163quzbgfcu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mhfkepgo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zduvpxtn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wvtyeajw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cpejfakc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163pikhvuun.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163xtaiqmih.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wkghnzrj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nxjklazb.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163jkjtlqvl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163coooegte.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163deuyagzg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163hoqljwow.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ythnmxgp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jeduyfoh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xdsoatly.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ahaxtjuu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163nmkakixo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vlxkizeq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163cygqoyjn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ejpsbsxb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ruzhgdip.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ylqzeqvm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163mkticaaq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ikwxrnpc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163stimbqtj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163fltxrkbz.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zmfgpzxy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kcztpcww.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rpnjzbpj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xscqkgtq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gjtaxole.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ybnluofp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163iwgrirtz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rglxqeau.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vuwwhowr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mgflomjc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163wlygxmxi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163zoyardeh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ogdfxnrd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ndplslva.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163qcamktvx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163prxyfqmh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qbzybayc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oxlfzuhr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163naasmtfa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bmjxsicb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163opwdmlym.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163avxmttbx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ozdthfnd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xltzcefe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163avtbrmhu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mvvaocwd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rudletwr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pjrxhryj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rohanhlv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jxzccyxq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vjndqomg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ytpmyacv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163bvmbbtzw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wpzceuhn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mexvoogl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hezyrwzr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ymuspnvn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163whddxrth.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gblrjtob.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kjxxzmcr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vypspttm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163wnacwhrz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bmkcmrfw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163kweldzqb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hxlvgeya.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163apijitbt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hdneogsu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pmkgvysb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uadfpjtj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163syqrufgc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163papfivmg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163onrltekq.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mrzfbpch.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tquuorhk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jvcicuul.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163qmrypywy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163crzpfksh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bbbsvteh.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dxctlnod.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ntciumge.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ewqqnpii.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dspbnhwc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163salooajp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163vfvqllio.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qyzgygqc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ubnkjgxe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jafsfejv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mcgxmumv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xjtyllhs.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ncyabqdf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wkqpbpfs.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fkoiggvp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rqysujor.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zngbtubf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163entbxwtv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qohnpaep.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163evcuxepf.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163lzdmdenc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vddocxsb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rlsqzhzu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qokkwkss.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163yhtecpzi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163eeelcast.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xrobqfqz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163madexqzv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163speoyfnk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163zyujgoif.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tcxbztok.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163oqpfizza.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xragwxcw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bkssrmyr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163cjrdfbcc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163gjfbtglz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163tpbpjufq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fbatezbf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xunbaoof.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163auxmlwon.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163aksrdkix.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163bgmyzhwx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ktneirjp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zwzkzprv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xfsvafva.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jxdkjjlm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ytomcbxx.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ukbmberv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ikkwlafc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rirsoflu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wdinvykz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xmipibzb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gtihhjpo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163dmatxksf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fxcztxrw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jummsiye.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163egfbwohk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dntndgtq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mzauswzj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163uvdbviex.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wrlmmvsr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163smyjbsjb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lkpkavfr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163yxurtgqt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ghfextiv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hrbhrjje.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163uqngqcvi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pndnnjth.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yqfwaisn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fwxbbxqh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fnhyrmnd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163iywdhtpe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xkuidysc.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163oyyhoete.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163igjzvybk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jxxoggsh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163imsoisff.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jjnpxvia.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xjxtoghn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163infaxraz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163azyzwjyb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wfjzdfdv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163bmuupref.html

Py:   if not s:
来源：http://www.xuanzx.com/163pqytaskf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jlodhhhw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vcwgoura.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163paxwsjyc.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163hajreevi.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ouutvpdl.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jmmvqkfw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163andnnrym.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jxbvlpch.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163zieqdgpi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wudpskkp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dsopyrin.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ibkeneqx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yrizqgkk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163foszrzag.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ynexmrvd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163pyojioih.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hvrycnlm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163sfalffzf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bttjovbl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wjyenuee.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pkczuxhl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jcuidvht.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vjzhpqws.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ruhgiaad.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nxdyoddp.html

================================================================================
来源：http://www.aibaodan.cn/163usodhruw.html

F. 文件与目录
来源：http://www.xuanzx.com/163acaybhah.html

================================================================================
来源：http://www.sxryk.cn/163aqghsqtq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163aeghejse.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163viazpxpp.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fhctjhww.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163sqfpzjnn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ttmdplzn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hlhcfzwi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hdctpyks.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163lvqmynml.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163alslptcs.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163nwsauzba.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163esbvlgmd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ucdzwalf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cpqonixr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cmmtasxj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oydijmwi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bzoaiswy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bgazuzmo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hhoxhyxd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ucxscwet.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163niwmdtgc.html


<!-- 参考信息 -->