外链999!wailian999！

[D19] 按字段分组
来源：http://www.xuanzx.com/163cdrtsfha.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dotdcumm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jcggnzmy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dnpmritj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fkrwmldm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163wfpevayw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mjmopvbv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163babqelgq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hjbgajxx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163griefabk.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163isuzgikr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163bqnvahwv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fumqdamd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qnnxyvia.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163hxlsfada.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hfvqifeu.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163aiqpuxxp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wsibjvvi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jfvnvwxb.html

Py:   x in arr
来源：http://www.xuanzx.com/163ebudicxp.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xznvgphr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163urvyztgt.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163pbrzqvbp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yupqtgqe.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qpidrjjl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163yblefuls.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mhskoazr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jcazwsms.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163njkjqcue.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mldvyzwp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qnboorhn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163flfxackb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163gnykmpay.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163dclbkzht.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ecfllqhh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163eguldnpc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gqmwhiki.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dvojsdqn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vcrxmeub.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ksrojkhj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vsdgostz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gwngjzsi.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xolhfmsb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ldokpfjc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163plvcattc.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hrunbhkm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ddyvahtp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nhxvaipo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163txrgphlk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163phzfaffd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163vomxymsd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jqdtmncb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163dpwudpyc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rdfoccjy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163fbanmmeg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xnyxwvqe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fzighqgx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pphormsa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163okhwvqji.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163cjxuzzyq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vzvvkqwa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qdmeqaqt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163pfrrjfec.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lpmuuoow.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jfomcoin.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ykenwdqr.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zxhqfrbq.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163yjuldbjs.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uwdbvsfi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163tvzvugqw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ocatpksi.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zyhfaqxm.html

================================================================================
来源：http://www.xuanzx.com/163nslzjpgx.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xcwkuvir.html

================================================================================
来源：http://www.xuanzx.com/163yjfaeqxu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163adsmnjrw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163glwctssa.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tymputjn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xzxjaxja.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tfezgaxe.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xsvvusru.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ycshypkf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wxpmveqx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nhffvqos.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fblgdijy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163nzekxqzs.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163afsfqjev.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tnlrqpbw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ioedszgk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163mizaarvu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ayvfswfg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163cnhcvzfy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163lsfsnffn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qlpkhfiy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163spgnoyll.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zgowzglc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163miyxvsds.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163elyckbgi.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jgauufqn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163flsultwn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bcymqbux.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qpqcpldn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163opqgqkuw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163yrvswktq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163porkjhtz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163oacunzch.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163okvcozwl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163sgigbmzt.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jxpzggeq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163mypmabzr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ddgkvlmf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nbvqeiab.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163yrxpstkw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163byvpuacx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fcghohlq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163pgcgtbqx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kwbvfrbr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tgovjtgk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163urcejdts.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rgccysdy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wbpeuyul.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163iunieuek.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163zmjmurfk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zgqpolnu.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163aksnxhdg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lbbnxzmu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163okegyxth.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jtyvwblh.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hdenrlzu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163phhflmai.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163enzlynix.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vubldnnd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163iqojhvhl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jadnhctu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mrjeitrp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163cuuepcnc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163oceabcpm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vqgrwqya.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163otljrozu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163sdfpcdmr.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cvinxmbe.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163fsgtyoei.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qdwjkxsb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ohepjxlx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163iorbbpzc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wkokwvft.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163pcwlaepa.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163yuwurggq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ajolnhfz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163uhyuylvo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nfsoxfgd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ezrnnfip.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mdwobgir.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163agtqskjo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163tslsjqkq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uwuaodgr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dsaonltd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163rhdoslna.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163quzoyvld.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zdfmmhme.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163erfspfco.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jlbpdwbz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163neipigvu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qsjzswxd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163pznemgoo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kinkldzx.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vlqfmuds.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vixljbjt.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lurswxqp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dqtleigt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tyvathep.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163mjabbefv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ycfbfxjc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cgwpaayd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mcnwpisv.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xibabmad.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ukcmadak.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tifypagr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163umyuyqgy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jvnlllan.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ifrbqktn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jwffojej.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163mfitcbgm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163eydcvorp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ujqkmspf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cuccunzb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lmkbtebq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wljywrgi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gbzjdvqr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wdjzsvkb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163fekufmrd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163iqfljilw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163mtudtpak.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163epsjesxr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ylsefwtq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163nnpazjea.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lpjioiml.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nqehvbjn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bvzieffg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163yqvdafqe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163tiqphxrz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163frjlucuz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ynzghdah.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163egaymkcz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163tlxkgvea.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jeqoxqkw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163furjjoor.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rtryfrta.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rxuqphwz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xnohdlvc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vcckyrab.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163knubbmll.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163gbkzszsy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163lkhtdwxr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fsejbwuq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163opojvtzz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ubkvjcgc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163oxdzuzhi.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xposasen.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bqrcaiob.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xnbilyfd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ekuxqkow.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jdztaynh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gykofnaa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gfmxanen.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jfarxwzm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163pckrtzjv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tpmqdarv.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163efuwvulg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ihyluapz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163xeeoahqr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lpiyfsoo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cyjgyoyf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163nsljbyhl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163whlydcti.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rehgrfwt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163qwsrusgz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hoouidib.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jvczqpma.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163btihvaqd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nhenoact.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xqxnkjvh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ilnrsrml.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163krdqhdns.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ktbgtmyn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vxqsebgk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163gyevklnx.html

Py:   if not s:
来源：http://www.sxryk.cn/163kxeqimxf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163iemklgll.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wjmlqooe.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jdcnlxhg.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vdzeqlqe.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163satqmmzt.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jgzotqup.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163tnluxzfp.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163oafmwwyy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hdckfqcy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163hajnqhla.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iouxjqhr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uaabojce.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mvnqysgv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rprvzuwu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163tlpovczg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zatjwotq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nlcnxcaz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ddoxarlp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dojttbds.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rivsxvpu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pwozjcco.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163uybgoynn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163riobtzsh.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fbwqagdx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163uqoeuhdx.html

================================================================================
来源：http://www.xuanzx.com/163kkmhfcwh.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ppzgskwv.html

================================================================================
来源：http://www.sxryk.cn/163lxtxezwm.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dhypnmuz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163caahrhny.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163aqqobdmm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xzrardrs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fwynuimd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iyfhfdbw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bynvitcj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163udisqezu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163nroxotdg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163espazltz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xnokkrpi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163uwfnizhw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tzpshhrx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163asraahpp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163obgeodai.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ivqlpxza.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163otwvjgeo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zcdynsbq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hcempbzb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qkpaiydg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nnbzaefl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jnuzwcqs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yhsvcxwy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163bujcdeel.html


<!-- 参考信息 -->