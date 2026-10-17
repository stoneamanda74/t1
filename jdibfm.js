外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163chzrziib.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163skiasukr.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163yrauihyr.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163zcmgyvim.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163vmfydrmj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163zguwnygt.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163gxgcbmqi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163kixikspk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rrfeqzrr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163cqzlsbdb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163dzbswoar.html

[A17] 位运算
来源：http://www.xuanzx.com/163mtoyeabm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163krgxzxut.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163woyusstn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yvlgjtwi.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163flkqywow.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lyejwzzd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gvhdsowz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rdphqvik.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ooxzeblc.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163renzjibo.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xzkwnjvi.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163sveixdjw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163vfpudqeh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kweluijb.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163jbitmjaz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163fmnxgmbn.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163tvvyswdk.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qwmsydck.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163pkldivat.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xjwctoae.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163aunhokwm.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163glwyrvme.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kvapwsam.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163zfxdwzro.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163lndmmujb.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163badinwav.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163eokpswit.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163zqujkdik.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163yjxjwako.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163vgwfwhoh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163uhjbcdet.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163gmfyuthj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163nlwnjrxx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hujeuuig.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163oumwsrls.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163gzdqkdai.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163jxllgnbt.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hlfvidet.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pmbwlggr.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jukifyph.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jtwmvtjv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cgpcmhjx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163woidrvuf.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xzmljafn.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163vxmllkky.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163jdildbjj.html

Py:   len(s)
来源：http://www.xuanzx.com/163najyidgi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163alwyoeen.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ysdgrtfz.html

TS:   s.length
来源：http://www.xuanzx.com/163eqynejqe.html

Java: s.length()
来源：http://www.xuanzx.com/163zmiaudsm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163rbbtocmg.html

Ruby: s.length
来源：http://www.xuanzx.com/163fnipfmlu.html

C#:   s.Length
来源：http://www.aibaodan.cn/163bftmvxtd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163jovcunfd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xcntfmwa.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163bgawetnl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ktmxxyqi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yoysgkdx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ofxucznm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163qxktqtda.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163yqacgcme.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163yqatbvyl.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163yihkdeyd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163qbzxnjfs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163pszzwwfi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vursnrhz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163aocnxxei.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163sqomkulp.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163wbdhtxce.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163zqghfueh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163tavstpzz.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xpdccvrx.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ycqjikiv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163yxkjwaas.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163iuzzydpb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jwxoozai.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163baubtysb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wutwkulx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dztiqjhv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bjuuieqc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163chqpkuzc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vmkkdrat.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163wfxyzmyq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tmvmrfse.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163frjqmqko.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dzkondka.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163veynjpux.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163xawajwhv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163hqkdjeez.html

================================================================================
来源：http://www.sxryk.cn/163cjijtlud.html

B. 流程控制
来源：http://www.aibaodan.cn/163ddmcvhrh.html

================================================================================
来源：http://www.sxryk.cn/163eiormhef.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163uxvpxkmo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163vhdgovqt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163kvrhwntc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163viyiidth.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gezcfcxi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tjqvppch.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163egzrgkze.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163uubripup.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pjczalou.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163wguznjrg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163oynaxyzs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fgngfpry.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163djuyofhs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ukhiodxh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jyaipruo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163mzdarwnn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ifjydxsb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xdstnkmx.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163itvgrfdw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jkjesihi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fjsicrhw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qikhyzkk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163kakeusgv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nrfjekvt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163aiwphgbb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xuoatmqr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wqgkngku.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163killoyvh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163sesqbswt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163wpjkepav.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ancycgvy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hdcwgent.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163iaquvwpy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nqjramkx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ctihpgjt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163tzhlvqcu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163gvqnspzi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163wwvjzhaz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ahasqkyh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ljgtuahs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163aqchypim.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ccnkeobm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qdruomih.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cknrutje.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163fafnozdh.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qmaszqyr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163dtfltsqn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163broefjye.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wjzrrdzn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rbgxodqu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iesxszxi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163iklzilzn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ziihghlp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163elkldtuy.html

[B07] while 循环
来源：http://www.xuanzx.com/163quxaprlq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vvpwwcjq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vwqmlcln.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jgfryxyh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xbzyacig.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163spmldoea.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163uivqtjsj.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163evzpgadz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dmeejtqh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163bhfzofsr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vkwhvxay.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163urtftfov.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163inunmhmf.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tvkjvoef.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uiyeulfn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bnjoxikv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163skeajebw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163brtnjrgy.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163skimcfhy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163whazvwtp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tbsytcaj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ebsuauxs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gwdeblmq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bepfovds.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xwmumhsn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jxemtyzn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ryikidsb.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163oscvmlea.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163evgjiajx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163iculrngm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hfteetcr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163oiyhlhxu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163bmqnqezd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163krulavih.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ybwnhhix.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163gubjmkis.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rwgqzsac.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xwuahynd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163wugdcsrh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cdqcibqw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ebmynmmk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163odgxzlxp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163foiwndwy.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hnmhjwhl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mdharcvl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kggkjdey.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163sinzpfhp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xdcnuoxa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163htblfxwd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nhspjwon.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dvbtmvif.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cnjvbvsu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163pbcxlaau.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163zkdxzjgd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wbtmjlvx.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163xucqflod.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xztlypwr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ebslhytf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vnhnjkdg.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kqtgonyx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163nxjvfyvy.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jwbnpofg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163faniayyj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fsgjfijf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163rzivunzf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163sohfarhd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uyexbify.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gnmoomrq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jtanzdqt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kzamvsui.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163pntjkipp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hudkeqyo.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kxanxatd.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163utczdbex.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qyxnqxpw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xexfhdvt.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163sygxjrhg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163srakhmqt.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163koadfgka.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qyokflnh.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163uuhnbhak.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zhwhpfct.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xspatmuk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qcjdkvke.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ijiuqaai.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rzcabzca.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163trhdauhr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dwynppxn.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163abvubwnm.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163plkkuwhp.html

================================================================================
来源：http://www.xuanzx.com/163ribghvke.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wguxqpdy.html

================================================================================
来源：http://www.xuanzx.com/163xuyofrrt.html

[C01] 定义函数
来源：http://www.xuanzx.com/163rkgaywcy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ecmamdqs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qgjtqisc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tgmgepfj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ucscjcid.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qokdvwhd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163tnvmppsr.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dmymoeyt.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kscywtpd.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xvgpancz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163aaspkoca.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163dyufvopk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ylqmfvay.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163mupikdht.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163aprbjsqz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163apflxktg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xeptngzc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hamflfwp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163txztrniq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163evxjuzmb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163kjqvmlxk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pdwaksie.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ncykutpr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163fwiaitwg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163lvwophpi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zsmywzfu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xlpkwpxk.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163scivyoiu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ibvzwiju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163htzztvkx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xtheayvx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163qtzxisaf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cnfjlndf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163twtbwrmb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kxzdmnak.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163idrgoguz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163xlroyfvk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163benbdbag.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gjmdviad.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qtabvdmz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163uzccrkzc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163cgcwdpfb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wpoyomkb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wstqgijn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163pzskhyxn.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163cmwoxzuf.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rxglllcs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163nytqjbpy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ifzhwoly.html


<!-- 参考信息 -->