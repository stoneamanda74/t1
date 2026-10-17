外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dxqgtnly.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sftgndmc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163uvaxdnni.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163kpzgkqia.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163khklbcxo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ezmnkyky.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lyofzzbp.html

Py:   x in arr
来源：http://www.xuanzx.com/163ehmuxfoj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163hvrksdxv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163bhcyxdek.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hhzdfixw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dcciaody.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163zwrbxvvi.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163prppigzb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sxjxxzoi.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ydysmxuy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bmrbemxn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tlvaqyel.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163uidjwezg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163lqlktmun.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163vfgixtha.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rxfjngqm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kqhueoge.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jhwinmqe.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163cwjmntgg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163sgxnyqni.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qkikrbcl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tzmrkuen.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gijdarey.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nndigjtx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ughktvtj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qpzeiqyr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kuxnuseg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163slyhavya.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qpypdzue.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cgpxoqxp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163frchyypi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163elzvzvbi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rlwgrpcs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wcbdptve.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zfifjxcw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163zqnwxspe.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vnitwbrb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163swpgszdo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163bqmkaqkb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ikfspymt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bcmfovwt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163oytpygzd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rwtfgnma.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hdlsxxzs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163lmwlwpxp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ccubmiix.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jlottqoi.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163lhxhyrsd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jncskawh.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fdaogsfp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163iobqnznn.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tpjcuecs.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zauabgbw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ehyvrrmr.html

================================================================================
来源：http://www.xuanzx.com/163zzatvwqr.html

E. 字符串处理
来源：http://www.xuanzx.com/163fkgbtjmb.html

================================================================================
来源：http://www.xuanzx.com/163xxmscmfv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mlfcuccy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dqioakra.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163eyyrxvql.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bhnutyyp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ovakuhkv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163uonzuecb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ftbsvrgh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hxtpurmi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tcctaxcm.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ipnavmpm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163iipisuju.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qkmbbkqz.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gqsrnonm.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zoioikbc.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kbkhwbii.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rjgvxeln.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163palceqyj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yivaqvgf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lvybprop.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163elccnyke.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jwkdtlgj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163xzycxcpv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tyakcuma.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163potqifuy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163iuywkqty.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vinqukmd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gjqrfnou.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163cdozvkuk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hvpbivvs.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dcagfcfd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fhemmyuk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163fkpsqrkd.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kpdsfrdr.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163grpkglmi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rvwkbqva.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163awsyndhy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163lzovektx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163pzvoooix.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163undvgoqs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zhsgemoi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163exhhufms.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xovmzqnh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yxnjueds.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163eiiffedd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163soaliifn.html

[E06] 替换子串
来源：http://www.xuanzx.com/163uduimljp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vnulyyqc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xasgizfa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rmfmuumv.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bijeoucx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fmohsnjr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ptyuftiv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163nouamiwi.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163wirhrano.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163iuzuefgm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tpblgbcq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163nyyiwcde.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163dotfofgp.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163preaunaa.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kaiaamjg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ciyhblap.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fpvbjldy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163izhtmyoo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ikrirstd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163elhxxvmi.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ummkiagn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163doejrgbi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163bblijcai.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ehvmrmfe.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ucdddrjq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ujrlckhv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qrwpfedb.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163crxfxbdr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tnlclkqz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ksbapvcj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mpppqugn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sbmzmqdh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163kiwlrgsi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163dqvszmea.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163chieeczq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163petjojhj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163srcbwffi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kngwkyny.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163enxlpnjn.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zstvldqq.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lyedfpfb.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zljcgjwo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163fgqjhxxq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163dbbsnuos.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dhyehvph.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rdjjnvlh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hcopldib.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xirbsqxh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163utvfayec.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163izlekoug.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ycsxskkh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163neqtkgra.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163wiqqvmsn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163leouckvx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163nnqaossh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xpudjvkn.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ginvpimo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qltzdmgy.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163amijhdbt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163hxkpkvyv.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163aweypfze.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hnnsuing.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163aqygbcwk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163smhgdzbk.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163vkhsiubg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163pczeacth.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rlgnhcqb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163twjcytjs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nupeiccs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163vmcnfeyx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yeywqpcu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163icptmnkh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163caidkpkd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163elnvnozi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ivmgnxdo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qnusidhf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wnbsflap.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ivifbmxz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163dmxtjifs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163mlfbhaxe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163firqnihr.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163okmolqei.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cqmwslye.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ehmkaxkj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gtdxoivw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163nmvxsuar.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163unggjcay.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pevcjdfx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tvlkyetk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wrenpmya.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163amualpil.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163jzlnzljx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163nekrspwu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ydzuwjky.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sjemwjwr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163esuplrta.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163amtbfaep.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xncnzquy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hvutxhoh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hxpzmqlv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fjwhegqn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163hhrgwndh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jvnguvyp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bjovtpdy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163urlnndvd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vhwfgyik.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ppnricqk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163cmvrrsxl.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ezoyfukt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163grlnajwy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nxuffzpv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ciocwsal.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163csdlvwow.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tuiposfn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163xhlzhrmx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jzyarger.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163sbmtqqlw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ztdolwqu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163kvuxvvxm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rzwvvuuy.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163djhiocqp.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nzllukif.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163dtkzswsf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sztbmojf.html

Ruby: s.lines
来源：http://www.sxryk.cn/163zhugkvdv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163eeinvdch.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tfveeqbl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rqcrqcoh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fzkfvftu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hluwcokw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qdaoarro.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163cudhozbb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163uqiaktnt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163grxozcoq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lbivepnk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zqmzyutv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qqlcicuo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bvgnvrbu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163imozxadq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fzugylpa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qonkhzpr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163unsjrtta.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dwkekbos.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qwqbgwix.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gochplxi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163zrrviaxu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ruabxqfl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rwbmphzb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gykgsrfd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kgacfpha.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xmbtuygm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163eedxdefo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ocfdwhsj.html

================================================================================
来源：http://www.aibaodan.cn/163olbgejnn.html

F. 文件与目录
来源：http://www.sxryk.cn/163klbwrkpk.html

================================================================================
来源：http://www.sxryk.cn/163gumgmltq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pdbbhwtl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163umrbebrc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163crkhjxdr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163iakknluv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pwbxeoyk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wdcicegs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rjgankkv.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gwymbsiw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nqnhyzcr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163cxdgaecc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ulbnvysh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163liqsjkyb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163blsssbxb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wxsehcfi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sgspfyfq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gxtkymlw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bgrejlsn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oyrgychq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ntoqzwwg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163cuqdvqop.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hhpikdte.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hwcbphbg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kdhyqevf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pzogvvbl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ggzbdsyq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lhhmmzzp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lwhtfoiq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163iknmghxy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cretnlot.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uktpvgoe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nsjxgylv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fhplomxa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jfttvzdl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163glekdtms.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163wunfjtxv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163apxczech.html


<!-- 参考信息 -->