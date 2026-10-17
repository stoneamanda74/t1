外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163seahbvks.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bicesyii.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163snyqtuqf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163depqwlis.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163juoxeidy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163boyuyvnr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163kudutjjn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163dwqeqdzd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jrdxalif.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163npuyyddm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ahfbzxiu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163cslykdfw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qdzkpspd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mqbxxrze.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ovnrihhn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163cnojvnch.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163cfptcxdx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uoigjxuk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163udkwnzfg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163sftjbslb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163uahaqcvl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163kicrknyk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163phpshhwo.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qdaxzifh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163yubdwytz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163thujxgfu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fbkgkqkq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ezcuwbil.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ccfvanal.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pdubokpq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163dsuilagm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163brfzzcba.html

================================================================================
来源：http://www.xuanzx.com/163iwoumdnf.html

E. 字符串处理
来源：http://www.sxryk.cn/163pjjqdxrl.html

================================================================================
来源：http://www.xuanzx.com/163qpqanvlv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163aqoqfjwu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163fbvnfwab.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163eyksnirp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gwdhvzkl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hmhqiugh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xxvnzzee.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mqadwmrl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fogznvmi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163bxbddlzg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163gvtirqvo.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163iiexumtg.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xeuujqxl.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163owvhphxc.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lqdxlgss.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163eibsrurn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qeslfqwa.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163cdjzbanu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163xigxtzwj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xillnncq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hqnpgjrb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163endjrhyd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zczhzyjm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163bsyiwcqg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mjqsnztg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qihxjrpg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zfmwluln.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163dvbpvpej.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163yjpnwxpi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163pejuupzg.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163yuakrmkx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163krjteeav.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ubnombdr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ngnilhie.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163mqivabuv.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yotlfmuv.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163npoegekr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163gexnxuuo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bynvevdd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163brjmkrwu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163baeqcurh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vwbbwegw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gwapmupq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yqwxqcxx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163fxxuzubj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163cerkpwut.html

[E06] 替换子串
来源：http://www.xuanzx.com/163harehdxa.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163febplebz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wyoddvzp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iwjkqvdf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ldxdbhnt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eoexchip.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163rlwfwezk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163pvrawgxy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rufdxeno.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163gjthgcue.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nmhhtrlp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163bohimrix.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nuhjtngc.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163kivvwjdw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163faezolmr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163pnfkyyer.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163gfudmxku.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ogagmhfe.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qhplameu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wjgblmal.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jmpymzvb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dngwctvf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tsyttrrk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zvrjmack.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fdsgniup.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163osdwyurw.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163larcpndb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rtdzbrno.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ywydsezz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163emlpjoxi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163urjrjmct.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163upgpsjxp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mlbbljce.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163pibmnojy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163svyoonjk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uwkukknj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163wtqlgorn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163flectwce.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jykqeoog.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wxrkeytg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mzqydqxf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163qvxltvjw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163llqfbtcq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vnhivdib.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163djxwlvxc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163weahdlnz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163gdoixwch.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ouvdicqq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qoeolmzg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163spxicwim.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dfsvgddw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pvzcpbpa.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kspdvnjm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lwlbibca.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mdsaoqtt.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163znrqtjsy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jjvcmvrq.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tnsbjngk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kakcnrnf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cmopgmfr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ijhsgiug.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xdrwefxv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163kycryrqs.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jifohtaa.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kfmyftey.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hpfqhtbe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163psfaglub.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qpwspbyw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bahppoud.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163slywnsto.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fquutkac.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cdifkwho.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hucpbhvv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ntlufvic.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163iykizkec.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mjkgushm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hntntuhs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gkvnrjjc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ugklmgsy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jlphdejp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163aunmxxsj.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163zvvhpqhm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pxjudgxy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163dnpqlbzk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lpwdxlun.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163fwerkagp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163oeegenmi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gtynglsl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163uyzwgqdj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lgqpzura.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163sptwvxtq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163yufsgcuf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bbduihgt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mqmhimfe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fdigoatr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163svlhoudz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fhurtqgt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163lzzdihzy.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cvnqqkuh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wupqkeld.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163umkqnezk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163wzpwjxtw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qyjexkel.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mowtgaha.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163twckcwkv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fzautlat.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tpngwegb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ehqchguf.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pkyoqijy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163dcztkvwy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fmeeteoo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hzblmrkc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pxhfemyc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163guibuztq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ynpwlhmq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hctflunm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163kwuvprwz.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163gzyaqfnm.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163aagtvafy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kmlslpwm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qqrjqfga.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nushiuvj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xlhsznlt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bgjwffxd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bqtxgdfv.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163majvgogj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163iiixfqpz.html

Py:   if not s:
来源：http://www.xuanzx.com/163hhokpuje.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163baeeexki.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ieangwqs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uqxqiszh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rfxgsqst.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163bjyynyee.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jbmbjcgn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163passmjrw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gnfzaxov.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bqfmpsvh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kovvmmbt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eswhdhmu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cpyfedsa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163szfrcidg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gtqroacb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lhfrjoow.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163myiddziv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ksjohxev.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jnijlvcr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ddxvxloc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vhipthvp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jhlykgrp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163vzlvzkwy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ododqnck.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fkmomzbn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163uyttmmhf.html

================================================================================
来源：http://www.sxryk.cn/163eonqcrrm.html

F. 文件与目录
来源：http://www.sxryk.cn/163fwgsdrof.html

================================================================================
来源：http://www.aibaodan.cn/163xulvfryf.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zttivvby.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ccltysol.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zgqlvzaa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163oxracgzh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163qbpwnjcb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qsrntpdr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163aeqnmncf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vfiuigyf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163nhbiyfda.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mlofacjw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163asounhcq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ttormslj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jifngnhe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dewtiswt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ggsbnrsd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zetsrfyi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bqdtqxbb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163brpsguxw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163brebaqhq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163siycecjv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fxunbkoy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vwxkjjvo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fgypamvj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ujyvoxdy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163auxtadlw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163htuanmcr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163uuwcfmaq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qpxtdznw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mhpuohzd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pfleetqr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163trihssye.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163brsvwcjd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ufljhpcs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ibizldjg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jhbhwjga.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163seaykevl.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163bjeyfmli.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fxfygmyx.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163tjztuypy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hshkrbdu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rqsknzrs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xfmcrhcr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163abqlzmsq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mhypssqy.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vwpgpsyc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zcgjsygc.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163qucdnanv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jbwjnrsu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yyohyccl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gkpmwaan.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163upwprugt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dasmgyaa.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mlkvavdh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yicxhenr.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163inpkjggu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zlyblfpn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ystsilil.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ukpowwkx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xngddakw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gpanrwzm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163eljtfpqs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163agtkxvtp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163outxfqtj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163adapetkz.html


<!-- 参考信息 -->