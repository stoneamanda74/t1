外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163tjxcylqe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pptzdydc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dapzqugg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vyoeurxk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hemrfglj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xzdizyev.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kehctbka.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qawadndk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tfxxxdcz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gwdcejsg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tjeghgei.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163iecrytwm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163znjwwefe.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ndwenarw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163heilmlrz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163sjffnpoc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163mksjqlxe.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163srcusjns.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rdmndhqp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163bqberuru.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mcsxfaqs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gqtswwfd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163titenwam.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163waptvkqg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ikkigkmo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hjjytpmu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163knqdzqsn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163lctqfeid.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kmpwxqxy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ufpngagv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vrdkbsoa.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163rdfivlsf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163fqmjfauf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163rvqwpibq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163eyudkjfy.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dvgassek.html

================================================================================
来源：http://www.aibaodan.cn/163whfewoyb.html

E. 字符串处理
来源：http://www.sxryk.cn/163libslhud.html

================================================================================
来源：http://www.sxryk.cn/163opebrlan.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163rdyuhgtc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lwbmclto.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163woxpyxjm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163webxopcg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mdhwiqoc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rfwfbsbc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163dknihojf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163husbtfhe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lfealfmp.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163anajnvvk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163kelrovtm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ujuugiql.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uhatbjxy.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yrcohuqk.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ybqgetpn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163blsonxft.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pikelvfb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163gdvglkll.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ouvnrpeo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163offzfdqw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163edcwsfbx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ihquxffp.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163rsyocuyw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dsveifdb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163tximbamv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163yqojugfx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xqslkqjd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dtxltjoj.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qlaymoqq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tgkrgqmx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kfmrxukx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163cdnyqtfj.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pddcveyj.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ylvejszt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qmehcfng.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163jjtjfgcs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wpmzvjgr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bznsgnbq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jvbygqyz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xruwqciq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163cgwxghln.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pyarqkod.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163nojgnitj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tkaqoewb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163kaswseuj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163cnoswrnq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163doajbezq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ynnrjehq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tamvtmzk.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rytphile.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rhrfqply.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uhwxspnn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gdkesrny.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163iacmftlg.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qxlurhfv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163gwausrcm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163eyfrkaiz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xtfrbreg.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163anrkywvl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163matypsbb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163yhkcowhi.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wviogeke.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ujqcnbnb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qpzlvjho.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163esswhyqc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163chmrhcrv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163irrmrovd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163igzhwnlf.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dgjdnanw.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163suoapvfu.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jglkcgqh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jkxxecoz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hymqgqbd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163kgmrilyo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163snkouqqk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163edeljlna.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ccilnmuo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163duaizirf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bpdfjrxj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163rxwulmfd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163gjptsmqv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163suwvvajt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163hqtuonyz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163iubbfhiq.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rbntsdro.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zxgbeovn.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xtfsmtlj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163idpwhxvu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163njhkkcsi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hgkpyawg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zzfozmpd.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gwxjrrux.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163huspudvx.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pymgdkqq.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qtyonkal.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bayeqiny.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ogeypsyp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lnlyduwb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pqarzvqb.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jbrvnsds.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pyqzapdw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ybqrvbsv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wgjqtpxw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fdevlmdk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163tbrmwfoe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163evywzfsv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jgppbisr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163irbduxcd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ooqpxppo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163zjzhpiah.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ptzwvnfd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163inmbhoxh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sqrkuqkm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163udyaaiao.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jnbvqwst.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ubwomusb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xkfexwrk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wfocnwxl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163zmqaqukx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yyulzpms.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cuutjptr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163odngzptb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rslpodhx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tenhbolo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zlnxckif.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ddrhhwkt.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163rwgvpdoh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mmruwivy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163absbnica.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163syojcjld.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jlcjkatm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rftombqn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163kywztjgn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hsfalmci.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163htpznlhd.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lvixktcp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163scvmkscx.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163tgiznkaw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zlatkqva.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hdbkbwca.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163narqsaio.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163plovzqvf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jenkiblj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163migrccpn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zimpqirm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163upvkbxvk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163dcokddxg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zrolvwyc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bkrizfkg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163nuelsodt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163gerubsvc.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163axehvjlm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163stlafuhq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yuxwniyd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163muzfpnbu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163svoyprtg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mkwrbjdg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ewleclpt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ezrjbees.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tqimpiga.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163srjnntfz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kdtmcplb.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163mdkfxlxl.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163sgjtbuti.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163esdscqhl.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163syjajejt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dnnoucjq.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163remjdtwl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ghtqeuno.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hluexefu.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163edobqnfw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163octfnnll.html

Py:   if not s:
来源：http://www.xuanzx.com/163onibwidh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163czbetzws.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163twmqtesq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mwablsxr.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163vivikesl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ekhblxyz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163givtvllh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163bfczlsde.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163zitkyrjm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ioawqvnw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163uinqctuo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ndfnqchq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rmgywizz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163czryjzjh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163buiycbrn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163alqmhkpd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163igkhmegp.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163btkzlgja.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jxabqkar.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jkbmandz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hststuhd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kzrjjkon.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163npvfkrdy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163lhoxivru.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163risnpriv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kpksdwld.html

================================================================================
来源：http://www.xuanzx.com/163nfkuxnhm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163oilocupu.html

================================================================================
来源：http://www.sxryk.cn/163jljcamyo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163gtfmrbus.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jqtusugg.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ngfcyzke.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bqutalev.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bqnmecam.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ascbpvlx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ctfgjrza.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sxqnjmxc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163bepxucnc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gifxfaay.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163oyptlpjl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163pnsrszxg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jfrpuiez.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163udzrbfbg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cbfcvncd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163xqdcvgth.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zajjeiex.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kjbxcunn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163pupcpabm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163plbxqzkn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bcuzxnaf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qxcdxwin.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bptxegwe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163frauyqvv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163werhuewa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163zgahmeoy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tvvlgeuv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163smjapmwo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hskotwal.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163dvbaqjpv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kogfnvsu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163khowfpya.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vxeckbin.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lhidhuhz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163slqeyuox.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163nuwfoxmi.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xbctwsav.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163samwhfjv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163txgrfxpw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vcdlibcr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qwwguqju.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163miedilxp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xmbjfujb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163sllbbsqt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dmafbgkx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dsveckrp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gnvkumze.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163zbuvykfx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wvyqvhpt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163urkltfmx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163caehyixr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kezgbyiz.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gllhhrbr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163djnfjonk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163detmtmds.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vnsjhlrp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163tsywrrfr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sfdmksml.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zybvoafv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163enpenugb.html


<!-- 参考信息 -->