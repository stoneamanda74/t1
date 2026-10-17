外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163soqmjnyt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163kfvpatzo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163aezsqwmr.html

[A17] 位运算
来源：http://www.aibaodan.cn/163talppwaq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hkjxdvfy.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163dfpowwoe.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jsxfbigh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ypykfwns.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ejujdxzg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tofdbrtw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kbrbdnxh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ptkajdcy.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163sbstzbna.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pttwvzag.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163oewgnrky.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qozaywwr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dlhnonpn.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163oveugicp.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163bqkojjzz.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163xfqpjdkj.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163norxwkst.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163oupdczmx.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163dlkvqylw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163hddvfzmx.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ugybicki.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163eaadwovg.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163uxovbbuw.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163prjhwtfg.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163cvenaiie.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vhchdaon.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163mxqwopzv.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163veavczap.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163hobaqjtq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163fqcrheud.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vtastxai.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163fsiversk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ttaaghtk.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163hemcpdza.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ftdpolyp.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163xdnifcjr.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163rgefvnee.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xkfecvlm.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163sxrrvclr.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ivglaxre.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bdtfcrph.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163eyofirlu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163asuahiyp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163qgxbhlsx.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163sxspnpeu.html

Py:   len(s)
来源：http://www.sxryk.cn/163ubwusfrs.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163xoymcqhf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163qjsfwltv.html

TS:   s.length
来源：http://www.aibaodan.cn/163dkdnglti.html

Java: s.length()
来源：http://www.aibaodan.cn/163unmiuzms.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163sggtkpmm.html

Ruby: s.length
来源：http://www.xuanzx.com/163mjbrhrim.html

C#:   s.Length
来源：http://www.aibaodan.cn/163dgklghtb.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163tsulaxgh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163gdbbxjhk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163iwdycoju.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ilnnouis.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163anitucpm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gtqtiqiu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163hvggptxv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zfrtmcyt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ywitjzpt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163zhousvdt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163hjpnittd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163boqzwqtv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pwwqqhue.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163nbcoamwe.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163nruvncro.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163pcgmqxkh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163pfzuhilh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163kjufjahr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163clvbixwz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ucdanqhn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163jbctdgpf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gryopzbr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jfprjqjo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163mbcxhgzv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163uwhvinbo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pxutvmia.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163uxcuqmky.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163gbgflsar.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163lmyyojzq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163kladvxiq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ulevyfth.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rrybfhui.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163odzpkkmc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163upskllpk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163tcfuxwzk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163vjsqjlcq.html

================================================================================
来源：http://www.aibaodan.cn/163omzvvfui.html

B. 流程控制
来源：http://www.aibaodan.cn/163hkipqksz.html

================================================================================
来源：http://www.aibaodan.cn/163nsxvvuno.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163kaltxdyg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163azjzodkg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163eqhhrsny.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hxeyjvdz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xvakwsoc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dtmbqsuk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xffvcdak.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163tqefcxnh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163codlbtln.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163uhwvjwuo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tqcabhrq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163qfispcgd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163llgubwgc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ozxilhtb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163corxqmsp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163kqkqoivs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ebojdljp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qwicneas.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xztwlsqc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tzjsrdks.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bfkreava.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bsvhdecg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163feicvuzg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ogyfmkvs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163swzwjpdu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xgdgsyqh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gkiwcqsf.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163wvlisjmt.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163trvdebxv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163blrwinvz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hslmvotm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xjauaqjd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163lizfgjol.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mqkrnkys.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163sbfwvejx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163kbtzqwql.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163iiwvhbxz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ugfknifa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163uuiggekb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tcxlqgrg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xfiqpwkd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163xljtdjob.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qrqcmccg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163qahhrdcj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163dxcflqxi.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rnyugcoi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163rkmdpety.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gfhevcbs.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kvhlykis.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cycwrceq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163svewepvc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163stvdewqx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zymebqzj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bedydocc.html

[B07] while 循环
来源：http://www.sxryk.cn/163msabifed.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163aosxdgio.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gwsekpeu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uyxzrfxp.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jidgvafa.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rzcgmqjr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163cqaxpmgx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163cbbonpjj.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dhvstdna.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ntxkdsne.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mtltygov.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ugolrryt.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kktztycp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ybmtjvob.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163iokivbct.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163khaygquc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163glpsiski.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wfodttdx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163oxmkxikt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wqynkeap.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xiecieox.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ogijqhwt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163djpczllf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lyqkchcx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ubmtaauz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163litnkmwx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pvpbkrnc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xigkjnir.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163swuloquv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jtmfeumv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wnqhaqjf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ekqoxzyk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163fvufmfjz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hgibfvcr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163libjamub.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vmurqnjw.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163teiyojbj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163tmjtjpdl.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163hwgzbijk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yavytqjz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fydpbiid.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163djkmkxxr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hnynhiir.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163lwnecgyv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gltcrfos.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dcbnzhko.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jcitpjby.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wfyujnkl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163otmmujyd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gsnyfvzi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163weyunhcc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163imkjwapl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wahyfyrw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kbnsnkoy.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rpozxtdw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vhrvuvvd.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vimrpoer.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pcwvyklx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qtbykkpl.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163mnqvlsru.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ezntssei.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163upvwpfjz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ihohfllv.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gozjcdbn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163amhukjqz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fougxzpt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bmiorfii.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gygjktwm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163pvgiwdvw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163wjjrfdpa.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163malfodjq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163hnasgeqr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163yoojicox.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lrqqimtd.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zopszjio.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163yyklajdw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163muktrrqb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163foapyvrg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163sjpqfuns.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163eyivdkeo.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163vevirchc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yuotycff.html

Py:   if not data: return
来源：http://www.sxryk.cn/163phzwtnfp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qmqfmcsr.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zpanquyw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hkoctwnl.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bjipttmg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163caoedijc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zxrznnhl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kyynpvcr.html

================================================================================
来源：http://www.xuanzx.com/163xsgdnepo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bryhlfro.html

================================================================================
来源：http://www.aibaodan.cn/163jlezdcau.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yzfklojg.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kpfzlxtd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163chjtgfjq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163iakgxcli.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ohvdqyyv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fachotmb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jqzovrhp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eletwxtq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163onnrkmba.html

[C02] 默认参数
来源：http://www.sxryk.cn/163pcufgjuz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163rgfrokek.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163nsmzdshv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mhiusong.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163eohhmxvh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wzsahdom.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ybyyrmra.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fpfmmlyo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nnrojbtw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ljykkpcu.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gmvtlnut.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163uqocixnn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163olbxuqdp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xhqpyhpx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163prrsjauj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163hlidbebl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lfarlllj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163xplhvmkb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uvtayfor.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163yocfzmya.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163uiqrxyae.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163rfjztqlj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163snvksdve.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163peftsqfo.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163jucxphjn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qnpbytzh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eliaqyxy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163koaxfzsj.html

Py:   return a, b
来源：http://www.sxryk.cn/163ecfywoyp.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ssxpckzs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163gqtkfqbs.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163tqyzagbo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163cqllqjnt.html

Go:   return a, b
来源：http://www.sxryk.cn/163lnbmgvdm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163sckyupap.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bjewrzku.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163dkjgdtas.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163yuulpiga.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163vljtlzqe.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163uveddwdn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163djxjpxyc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wjrcxxzd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bffbxulu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zjctskgn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163unerejxw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163itdienvr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163nppbxaqy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jbfovjnp.html


<!-- 参考信息 -->