外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qyjusqam.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163mwoqixtk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163qgwetqow.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163zydqoqqk.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163lonlrtxb.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ydvpsigg.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163mmvbclhs.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163yqqjvrmz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163bdcajjgb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163mkcjxjzr.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163pkecbkeh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163qtxxpjca.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163mupdutds.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163buzpznrb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163mycntsrf.html

[A17] 位运算
来源：http://www.sxryk.cn/163bitamoyq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hfmxdvhq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163zozknptm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sfgvnwbm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163acguapqw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eurbouzf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nqycgfhu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tgdoviee.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mxwmoiox.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163iqnqwjnh.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163msgsorfv.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163wapvrqyd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ixywobhl.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163cfgsxrnv.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163cjjrdnoc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163lcsmxwio.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163uuinpviz.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163vxxrapec.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163oudousqg.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163eicwbeuq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163puwklieq.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bhjnmabg.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163hnmqupmb.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163jckzjccr.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163eahelcuo.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163lwetggxi.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ggvxnqaw.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163drqzahco.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163tjgkhgoz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163irqhhrnm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ipvrrspo.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163jwnxabjm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163cctnjesh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163hdcaqkfo.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163yolrixsj.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163lhzqjjfh.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163gcopzalk.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163aimdgwwr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fjuocvch.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163bpytgvxy.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163eovqlqol.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xcrieuhh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zreyuwgc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vojoojyf.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163klyjsbvn.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163gejikvba.html

Py:   len(s)
来源：http://www.sxryk.cn/163uegmvzdd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rhkptxkk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163efzrjxda.html

TS:   s.length
来源：http://www.sxryk.cn/163jrltymoo.html

Java: s.length()
来源：http://www.aibaodan.cn/163vkdhuywl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163elxzopkv.html

Ruby: s.length
来源：http://www.aibaodan.cn/163jizdbmjf.html

C#:   s.Length
来源：http://www.sxryk.cn/163yrxddpqt.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163cxfjjprb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163waspdqhm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ctpsqxuz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ecwjhssg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ajtrmhxk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hbtnwebh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163djmbxqvg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163yspjuifb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163izfcffqq.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163chvkqcym.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163eamubiyx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ggikaxux.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fkyngohj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163svkcagco.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ggidijce.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163txfcigog.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163stgwjntw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163hevlnvuj.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163betmbeii.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163eesfkyle.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163fnswatac.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tekvgbot.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163onldfeno.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163meqwixcx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mhykeajv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163gthmaroz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163uktqmstt.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163jatgvbwp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xmkxjnzk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163lnxeyjyj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163gbexpzcn.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ndmxxsju.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ocbxawij.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wkecgoxi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163zghiihio.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kbhmyaji.html

================================================================================
来源：http://www.aibaodan.cn/163uaojnpxs.html

B. 流程控制
来源：http://www.xuanzx.com/163ceiuvfrm.html

================================================================================
来源：http://www.sxryk.cn/163bnjqelal.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163xutbuwrc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yvdapjdi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163xpsyldnt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163misxffqh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yuymxjur.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163puzijdud.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ceydzxbm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163bwiqlabc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163feotgqvi.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ctrnsjhe.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pqgokbzf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163aygmotlg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ofmevjiq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kxeerrns.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163icyhtkbx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163lvuushtn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163quowhhix.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vmmzqtvk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163cuseowtm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163fmbryuif.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163mwzndwde.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163shtthmjh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gjizirei.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vjhxirct.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163nsuqswrb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163txndfoeu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163kiruuwnr.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163khmztwbm.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163urqfhzob.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163sakqrpuu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vzbmojul.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qnxansaa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163eqmhvtqd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zrskmxxv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163unbameuu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ssnkensg.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163tsqsdlur.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163iebhcogm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lmslwgjd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zhizqqiu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wktorlci.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ffrqvwco.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kvyvglyi.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163kpjpxisu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163jgyzbzef.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qmvcedwy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163pjktpzsi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163lyeehncn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bqtxbekw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163slsqamwf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163esjtalai.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163obmxrhzh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163uhtsuvhz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dtkckysq.html

[B07] while 循环
来源：http://www.sxryk.cn/163gxvawyzk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vtymwxwy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163wcwvcefz.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sbihqcyb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163snboojxm.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jcrlbyun.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uubjxwev.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hqwisyyh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rkdnkyse.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zbibcqha.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163epaelvaz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163tzcgsxbl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163awkbjsku.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sorrhaih.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163avgvczhz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ofvgditc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163hzgzsdiw.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mruntwce.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163svyzlmgq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nbobndos.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wnlcmbee.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ceofbiqm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163facspwvc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bskkctla.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ifsjxhtp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163flewwoxa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vmphnumm.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163iitcjggj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163wezaynoh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jwfnigwh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ffdogfak.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ztyyzcdk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ucycwqbk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163sjeohpli.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ijzybatx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mdneyerh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163climxskx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qxxywuag.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pihaqabs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uemhohra.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vuzvqkam.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xokyzswq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xbsxgxji.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wscsftrv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163udfcfwpl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163bgwtxjuu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xyxavalm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ctqqoltb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uootsech.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163icwrtlcn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dzdqodoh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yyunidyx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tpjlapqd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163iaqqojqa.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163yymnamqx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wdwlsmiq.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gcbupxkd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163usgmmbby.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163helriban.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ltejrqug.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vgkwgwne.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kkfrfrfj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ghbhpavw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163grelxxdy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163tzptmlhv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mlsaypnw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163novxxxiq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163awwlwvnx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hocjuylq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163djuclyxl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163yjqbkqmf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xcvpimtj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lojsxnlq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dbfwllzy.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163mhfszbmu.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mwivxwlb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ncmqelwn.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bilzmvas.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163uzduubwp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dkadxula.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tcisjwqt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sqrnvljt.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qessdioe.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163pmypyrmb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gcmfkfyz.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163okjnfsbp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163btcsrhjp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163hwhqwmxc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bovyfhys.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zaginwhv.html

================================================================================
来源：http://www.xuanzx.com/163mjhhtzao.html

C. 函数与作用域
来源：http://www.sxryk.cn/163useslfaa.html

================================================================================
来源：http://www.sxryk.cn/163onyohsda.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bejopppk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fhvcyozi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ymhlmczs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163zxopwtdb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ajqukqxr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163aehvztwl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zbxmbqsl.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dwtoyxtg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163neropkyj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dselmzqn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xexagxen.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163dyxhdagi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ebwdgqep.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jampjzbj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163aelwncke.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fhhazcuf.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ouqjoyaz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zzhiegjo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wswbbhfq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163uhgyqlmw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163oszenqvb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mkclhjix.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nplkoxgm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kyxeidix.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yjestvqs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lmwebecn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dyhemdmc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kvsjyxdi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163awbiwkwa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wyeuzwaf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eepcmqrr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163fsdfzopa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fkfovikr.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zpkfepuq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fqpkwiqb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oobmfskl.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163eesqjvvl.html

Py:   return a, b
来源：http://www.xuanzx.com/163wcirmnbw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jipcdocb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163yxdnugsx.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163aodfparw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163xutujlaa.html

Go:   return a, b
来源：http://www.sxryk.cn/163epdlvvbi.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tfrujovq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qbxpqenp.html


<!-- 参考信息 -->