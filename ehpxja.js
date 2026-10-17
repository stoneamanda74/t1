外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zlknfjnf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163keywqfbw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163amickzic.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163eoovnlfo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163wyshztdl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gvwaupox.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bzxkvntx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163wberyviw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163oujmqemf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hlumoqax.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zhsfxvqc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fskebate.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wewftrjl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jzuzxqeo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163uphpsnsi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yuvigvey.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uxdzkbrl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163dldonrps.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163iesykbft.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163uwgwfxkl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jvibdisz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xzadidws.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ujhplhhc.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vtbnqmqq.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163igtukxvf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163iodbyvsa.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wlubclwa.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tgjsxhdq.html

================================================================================
来源：http://www.xuanzx.com/163wmgymhoq.html

E. 字符串处理
来源：http://www.xuanzx.com/163pjqbpujm.html

================================================================================
来源：http://www.xuanzx.com/163fdifjjhx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163miwgckdb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163dqcwvaai.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jmpajryj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gglexlmz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qepyvdsg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jyvqfhwv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zmxpfnff.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hvooqzvd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ssusgkfu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gkzcgzhz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163aoieqszl.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163npjgmxep.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iqkhyuei.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zzggxmiw.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vllnmhis.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vamjbhum.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163prvktoaj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163uvprwayh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163qvkbrhpq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hpakndmr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pwioklmw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163unilupve.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vvqxwfpu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ufjkrigj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ndiqtuae.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xbqxrntz.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163uqptcsgd.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qmzecktl.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qpjtlpok.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163mgjurhjx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fusurwlp.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163frpywghr.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163gprvwdgh.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163smqpjequ.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lmgwtcas.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qvblxboq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163aodajgif.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163dtmqayus.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bphffaej.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ljhgdbdf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qspjvzcf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wzlzsbok.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163prgltwvf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qirbjwjs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ukpdhdnk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163rfnlxtjp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163frjovidv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jwcrgfqi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ovqbfjxl.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163awgourja.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oiajefpm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ccxktnhy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hkigboqi.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gbmshrge.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163zneyokaf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hiyizlhc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163asnizfgm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163kkciytqv.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163uiubflvl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163sxfwpjky.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163nmkyyqzz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ksogrxzy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fgjjydxa.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qnqdfbdv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ooxlboya.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ktvclrzm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163digxzvop.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yxjifeyc.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ksrirxwl.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kykxipsh.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fzctizps.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qjwrcwpb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163agemtzzm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163phnmtvzz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hbcbxwhn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hmligmuc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uhxnappd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qxnhaggl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163lzrzrmrc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jidhuvwq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tqhzpryj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ifpkfmzs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163eeggrcqm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mageckqf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eecttnyj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gbutilin.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fgnweytq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163aujkpfea.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pdrghzuu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hcupnnpo.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163eigjthjt.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dxqpumnj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qqbyrvwl.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xaquonxl.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ataabonn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qugzhhed.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163obvslslg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163kowzrqzj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ppxbkhpe.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163twnzqfbk.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163sjcdlvpz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ueyjmeoa.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kgtpxhao.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wkiyrcsl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163auouedho.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wmoqkztp.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163sxcizwtb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163khsveplz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vxmtdgvx.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163itwimvkl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163yyjyuxvw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163toewarlc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nztnhbri.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gkumdxtw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163sfcnwiiz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wttqhqnj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163oyypyyqr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bhpoenai.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163gkwiwckb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nmxvyspw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163whauzsze.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163szjlbfpi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pnmeseuq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163xxfussxq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vlsekovc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lofrxvpv.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163niewfxvb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hfkbasjd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xrlwqitd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163euolcwnw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163dmkdrscb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xgivdxpr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163vnotwdaa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tgwwibqy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lofjcroh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ilarehsw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163eugdrobv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vuianvnl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bdxhmmrt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163crdvcwnr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163htmlsbvz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163syrlvknt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xuamrhfc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163kyuodiuw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vvywbkyi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wszjwynb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163whexdmci.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cfufkgip.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qwwoqzop.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ochtqrbg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163htrrabec.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163csemubdf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mcemqnoe.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163rdvgbvmc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163gtchsmos.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163exipieez.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163aknwbtoe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rzkcawsj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163hxwndzam.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163urnhvwyd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jaqoesdg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163umukrawf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zjzjgpcu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jsobmyxh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kxmgcson.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hyfjlqxm.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nknvcvqd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163cfxgcpxx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rpuqwgco.html

Ruby: s.lines
来源：http://www.sxryk.cn/163vbwodstp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fxquwxrg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rpzgcrbi.html

Py:   if not s:
来源：http://www.sxryk.cn/163rtdgondp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ppfzhval.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hxfbdyxb.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163aloedrsw.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163idbrodwn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zowamdao.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mpimgrua.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ryyjgcbt.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163pzmbgsew.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163sahwfjll.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dfkwdtko.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jopamnei.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tdaaiyfl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xrxobzwm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gwjloeyp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163opefaqvx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wavnwcqa.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163aercbdbx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163raakrqwa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rwwgojim.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qyaeqddw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vkfvkoym.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163dokhnytq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jvppnglr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lhjshuce.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163aqpvjbjj.html

================================================================================
来源：http://www.sxryk.cn/163wwhwudmc.html

F. 文件与目录
来源：http://www.xuanzx.com/163efnjldsm.html

================================================================================
来源：http://www.sxryk.cn/163loqfnvkk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cgqklkzg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ckwuqqzn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ifswdotp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163kssrhetz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163inuukggb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jgagvqee.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ahcjknnk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qeuxnwqg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qhjpgdpe.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163nerpmnbf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bpkjuijy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163lrzudmey.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xczltpdu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hwpwmvbw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wvqmbwwl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fgnkafcv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nrtbaoth.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163gzvlbvsn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mvhbeomw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gyrzzsqv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mkyyuvwz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ddiflcap.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gmeddvhn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fxoplumn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xrjoeaor.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nhpyfpzu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163izddubzx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qhpkgrnt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cgrewsqr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163phvocxnp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ekdohazt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xpftbfof.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163auorpful.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tmlggznb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tqgeduvs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jbjhxsvz.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163omaqmqny.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rcqtgzax.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163yahvwmhm.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ikaqekzz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dwvrmudg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rxfptzim.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qobacohg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163abkkqcba.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kkkizvtc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ehnqcwsf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163confcjao.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163azuhlzyj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hluuyuhu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hmhqzfik.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hosxefxi.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163lmtsyvix.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hnjycbup.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163mrfbbdts.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163lgnkqazt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hjeqrrpm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kuqrzibd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163spnhiada.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tasgqijv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kbmmccof.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vdkvqndd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rgupusmt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163tahtyvpl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ajejpwuf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jveyzhyp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sqfuynnm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xpbenvhl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vtweizty.html


<!-- 参考信息 -->