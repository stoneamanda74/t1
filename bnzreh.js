外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ofulskqw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bxdyccnh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kspkosyc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ewqvdkcm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yxqprust.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xoeinbhd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163trgvdkhm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ehxwyxlu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163pzdsivsx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jhrwciga.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qjzvtvxc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163sqkilwkc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163kzzgnzeq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163gqrdbpbi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163fiepobmm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163sdgfjexc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163iwsxlxuy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163onrhivet.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163xgchqgbb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163arugdber.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ftwgymqs.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163tradtwnh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ogbgibrb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163zirhgvns.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vgvvtiat.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rgbeqqqj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163capwtyxn.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qycnkqdn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ckfxtftq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pockeizc.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bokquzsl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163xgasxpfq.html

================================================================================
来源：http://www.xuanzx.com/163ovwxjgiu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163irglnlbl.html

================================================================================
来源：http://www.aibaodan.cn/163ningxjyo.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163goyhihju.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163mzcbzsnv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163vllefbks.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dzrvcpjy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yheqjqzq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xbkqbmpg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163wdcgweud.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dckrmjkr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163artkhxqz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rdeaaydu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zvlaglvd.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lqxnxmjq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ajcdvzjx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163askjmrcy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ihbklxtj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163tseakgai.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163cmubltpd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163btjcplqi.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mnopqqmf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163bqfiqfqu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ftrpicfy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163dvystnyj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ccklsvrj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163sysghpuh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163amkxqnzs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163nkncmhvi.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rpfimnog.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163snqwjgab.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163pqcslpxs.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fuhrrpqx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163muxbyclx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163niicqrjd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wdondhgy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163nenoatyl.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163fdiyolsj.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163asqqfymr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lvjlljjw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163mypnrgnn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163biqglhmd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xgzmvywv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163oahrtctj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lkhmhwrj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163atlggyyq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xvckecvs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163btatefea.html

[E06] 替换子串
来源：http://www.xuanzx.com/163yqiccrjc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163jzwiaoho.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tshsqguz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ioklmrzp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qtryvzos.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mvjkmcgx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ohfpfdxs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jnqwnhdf.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jzngdjnp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163skknlcyl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uxqcvssg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ohnojspj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163iwuquttw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yayxgdbj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mnbzaopu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kfifvmjo.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163gvzplsuh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dneopglq.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163nlsidmpp.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163rjhxsbpv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wkkdnazl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ajzmfcyq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hptyaltm.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fetctyir.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163epvemzyu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xbgcizfj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163iabhmcpv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bsuwmpiy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gcxzfhqf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163scdcrsvj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nicxtzux.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lzkhcrvn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163luhtzduo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fkqeiszr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163eyvxwjga.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ghiydybk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163duooinjv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dkshwnlt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vmqiblpr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163iwddavfx.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cavyanij.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pirevvtw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163lniazlzz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qithbctm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163gsbuvjes.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bixqhxrx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163phlycynq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tuatmwxn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tzfvhpoj.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yjnvaokg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qvajlssn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zqlolzgg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163sykgvhhv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wjwhrdrz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163fkvsyilm.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hmcdwggr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163dfuqeske.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163asgmpbtw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pfwpwxuo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dhzdxdrn.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163svpouxxv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163csnxbsky.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163scmjeaed.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163orivexiz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163reblygnr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wgcjnoot.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163seeuzdid.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163spkaebfa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163xbwvsrci.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163gddrjkyy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163srdhptfz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wizbetgz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rjfdrxdi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hugyfamo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163juupdbdi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ezelhvdm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163onlnnfcx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fmdkmqrb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bssyojfj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ldmohwwt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qnufzfpi.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163aovtqold.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163fzvmyeeo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163czkzuhlj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zybgwzbo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pyosacau.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163oqawaroh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vzcgsarr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fjkidgxg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zgnshwwq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163eyznemve.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163lzrvxdro.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vhwimpnr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163avnjzjbi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dvygpgkg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163rmelrimt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163gyalnfpy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qatknvdq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163likwftjc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163gppszfev.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ypkgvyeq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163taoxbeto.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gqklucbw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163lpdfodym.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163fiuvpeaw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163llolqtgo.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qkairfow.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163eezyegal.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163gcrlkfmo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163tammrtht.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163nvjfhwfk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nlmoygbv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gkwgxfsa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jdptxexm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163pugzuwwp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163wcukjvne.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qtvhkekv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rxddvdsc.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163fmchddqv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163mqjxmsdi.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mdmsjscs.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xteteoxo.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vwtuqsqj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163tzafwxxy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xihbnmop.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163nhoaihdt.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fydobbmv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163bpjcycin.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163sapbmstb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163cyprwwpq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ftgjpthl.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mzglhtrt.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163oufsdnlz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163kfnytnrl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163yfpeekiw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163vaqfjxkw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163tuwbjcyx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zdkwbype.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zgryrhvu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dclznazd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nnupwris.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qpcrtypr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163kacladvq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jvdfxcrl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ooxfftke.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xmdebmwx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fxywpmoz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wrsrcmkm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163farqacgy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rrtiqumu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163waomxwfh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zybblezh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nstxsfaw.html

================================================================================
来源：http://www.aibaodan.cn/163gazaudkm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qaxfoasv.html

================================================================================
来源：http://www.xuanzx.com/163ncqneetr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zfsohkwc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163rgrdikti.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fqvvpbld.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163havdkcph.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qzhdtfld.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163meblfbui.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bkfhblli.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163acmpamlx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163grxqjabh.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lsilnjex.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163hcixnarn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163zcrwjpub.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wohddvor.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dcjsxujm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rdqptqnr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ayamudnw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163oywqusqy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ofphzvkh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163kadaekyk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163zeqdnzzh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163zxaoxgqo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bigxyqfl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bqymvwci.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163oyzwrhmp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lpqixuvy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163uymhviod.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163stqwseyf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163rnybmrcq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163tqzgfqdg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ehhmsnog.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pgvgypfd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vhrorlqi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lixsqoqd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cumxvdbn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xpgrdrbl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163reqtkrbr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xbnvftmc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163izdwewpn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ebpflyaw.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163isiljcrd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nitbbtap.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kbignxuz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ntjsaygu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qolmdzdu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qlshtske.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163uttrpoil.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163eqceinri.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163stbmcadn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ndagyder.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dmwwpfly.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fmmczvbk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163pdvmypvm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163sanewcno.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163hsuhysfy.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163sthbxqqd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163negvvebu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ncqldajn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hftvlunk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fggnehhi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ddqkhudh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xvydykfm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163bievgcrr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163yunakpko.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fivxrdcs.html


<!-- 参考信息 -->