外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cqtzzmms.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163avcpftdi.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fbaceqvj.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163iarmmltg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163szhlzqqu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163phmimfyc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ndeptauo.html

TS:   [...arr];
来源：http://www.sxryk.cn/163abkgczdw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163pxyqgkgx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bkrfxich.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163mueqanvo.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cniwpohj.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xqkjdsip.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163exirckou.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163iyicjpqp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163akbhiozk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163prlhulki.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xvrizavn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163adgquayd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rkzflffn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vtmluhhk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163cowlevgu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163vpfiywum.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tgbyfazq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163penbvpmk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163fmqotusx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163prgiwqfm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163iwnkfunb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fmfjyuvu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vhnexvxl.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163einbmhat.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163aqmenimw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163hbkmfjhj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gpyqwgta.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tcvaugcm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163etnymreh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tsnfuoeq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xxbihwcd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163oxzrgbyg.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rltgbygm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163npknrpis.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163owrncmqg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wfrmckyg.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qiwxvfgn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163tettzaog.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163egjeqoxk.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ryffhswi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ivhuppyn.html

================================================================================
来源：http://www.aibaodan.cn/163vibyjwsj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vjhgyeki.html

================================================================================
来源：http://www.aibaodan.cn/163oyleubof.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fbdetbxk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lrqqvpxr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zotacekq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kfwdwbvj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ibbkkdyg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163msngzhxj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163rqgbgrhg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ziqxbhsu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lkbzjbyh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vnfphsvi.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fitmgqln.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qzyvqwpv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kibvkzby.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163oyxcawha.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163oiwgudrs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nbvzetgo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163galbvesc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ohodzqcy.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xamedjgg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tipglfhl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xssdqogq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jhqbmfsl.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163msatdllv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vthxminn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163iluiximj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vtiaomkb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163oqgkixjh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wvgxdwin.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163luajgjzs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163elfjjddo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nqpzhzko.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nsbsxksr.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163yfyzrhzg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163mmabaxul.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lsbaonov.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163phpjzvkz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163btwbdgzv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xrpcfppz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163tmrmxqyv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nsihijpk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mhoxksgy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rcwlirls.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yluahjnp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163icbjggru.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hsebsmyf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163owvvbbqi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ivemdsyn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fmyxbfrs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163olwjeudc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163obnlswve.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hnlzanpb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163pmzqrfww.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hcbgybbc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163widkriar.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rkbodnfr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qzmwxvby.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vmegjcsn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mkycjqno.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qgrieuad.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163qqetqbxs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ikbepzgc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163tfwnxawd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163njpcfpym.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163csvdnpru.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tmkjhtai.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gtcdoxak.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dpjmggmn.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xmsiqmoq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163qibdwqvt.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xsyhmgdm.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163munoqiwf.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163onfyeead.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jimyagcp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lahjgxux.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163jxciosrn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sqwwtgil.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zxcjglvn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rcxkixfw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163prqtweob.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163fjrssvqk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163dtwivvcn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163uwownlqc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zqdgpifv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163guobsrdd.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163igsvgmok.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163axlyequp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163izshlwug.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xzvzytcr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xhufrmyt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ninmridq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kcjjrvxc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163vutjbcoc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xmfqpzzp.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163effpishf.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mqsfmgah.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gtugnese.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qasivmen.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163nwbeplej.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uxefcoik.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163onlpxkqt.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163sokdxgoq.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hpfpldrp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tsvsxxsb.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bwcsncrs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ykuxkxfl.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163advqjpes.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hesfiita.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ajzhqxsa.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xbknxumw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fgulakpb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163epbljjoz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tueacksd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163auyhurgo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ymhgxkhq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163cctcrufn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163strgxkmw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nsruotmq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rfadlunf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cqhjdonr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rgukjsdr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163iezmeegi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ajksiald.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dosdxfkn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163utxytpdi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jtuajktn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163eysorvsq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rojqlewp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163apubyoyw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163kuqimvvt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163rwmcyict.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163geumdzvk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163owlyjjvq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163plctikhw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lazhfaun.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hyxkejah.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163yaagjrcr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163acvfmvhj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163egqkyhkz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kgjrxhog.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fimkwmxk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xtashhmr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163njqetuay.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kukccvqm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fnrytvqe.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qexgvdlf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163idlbpwfl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163mzdqcqgd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wtjmpecr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cclnuoug.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163dlicwbob.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tidrlrfa.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vrtgzreb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wjqrvlro.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163lewznack.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163dnypjitc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tvkljwrb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xjsthbtk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vbyyinir.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ubbmjnzw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163aarneozd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zrzxtpfj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zjbmlbsf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163otvmjnnb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ckcvgwky.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163znpmkrdr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163glvvhzif.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cgskyxhl.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163aktfndwj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163eywxwnrj.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lkytxubd.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fbkirdal.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bwzdvmdc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qxfrksvj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vuiuoxqy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163askbutyq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mxwlfppu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163drreceop.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vzkjzblo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xomfepyl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cgikepnm.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163nvlccckh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ybtvzoew.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wdfvurlo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mszwxbqr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bdxtswfw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hbqagmpw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cqfbwfiu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163objlnfhp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163uxdnmbzh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163pkvqdfce.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tffupgab.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yhewveey.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vmdklgdf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163obnmcimp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zeebqgbk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wzmaxgky.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xdspjscz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163monxgeqk.html

================================================================================
来源：http://www.aibaodan.cn/163uqladqel.html

F. 文件与目录
来源：http://www.sxryk.cn/163qitbtufn.html

================================================================================
来源：http://www.aibaodan.cn/163kxysrjfu.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163uobbabnf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xllvlnvl.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163lygttanr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163zxsxrlrq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tisvtsou.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zzzkcruc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163yvgxsejw.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pajcipdl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yelrfeun.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mdzovksc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163denelhpr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163exevrmxo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lddkiyyd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163npbjkntf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mnpltnsy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lzssefjc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pfwnagkp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tilmggmv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163daytmfyd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vtkwogon.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zvirdxsa.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ejerkxmh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zkoakswm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ppkapckp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ihloavpg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ephexyoh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ybnxulgp.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163batzhqmw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pvpwzuae.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163yhxkzfao.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dskjmnde.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jnihxvrm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ylbshcww.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163svtpowzf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163muqfvsbu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163nfxolxdi.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rkpioqnc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dpjjmnvw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dhgykjdu.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dbtbllwg.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gpcxudfl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rshdzcjl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xoqwsjhy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tbkrakpi.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pdclbcuq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ivpjtfvj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qjbwtutj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163syheyxqf.html


<!-- 参考信息 -->