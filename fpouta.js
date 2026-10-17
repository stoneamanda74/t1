外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163lreobcfx.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163uxxvwplu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ybjdyhum.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163qnaizkbf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163pqjbmtej.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163mfmsechd.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ivuasboa.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163yhdxwens.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ywwohvmy.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163xhytucfh.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163oljdyuhf.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163psdbqkuj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jipduesr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kxxjmetg.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vyjqitdz.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kjcxskjm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wdzfmupq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163niofhkir.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163izqinpjt.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wfekxnsj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163hgozwptz.html

Py:   len(s)
来源：http://www.xuanzx.com/163nqqnofti.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163smvdxvmd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163shloncpr.html

TS:   s.length
来源：http://www.xuanzx.com/163fnyzwxlq.html

Java: s.length()
来源：http://www.xuanzx.com/163fjhofzsu.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163vmsqwejb.html

Ruby: s.length
来源：http://www.xuanzx.com/163mededwdv.html

C#:   s.Length
来源：http://www.xuanzx.com/163lhutwrep.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163wrxqtmbt.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163rupmtpwp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163rulyruxi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mkviwcsk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mxrvgqdt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bcbeciim.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163qskatwex.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163nuopydfv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163mrqavbff.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163fwpplskw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163nmiakujo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163bhjlevvw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163easzychr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163fmfrvjki.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ylncrkdu.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163fnkxrghw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163jqeafayn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163aunpgxch.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163thetrbbs.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163snjvlgot.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163builekmp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163etkdbpcu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ytdtetfe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163txbxwwfw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163fazpriua.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163mcdsmner.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163wunveqja.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163xmewxayl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zorvxjko.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163gksaifoo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163aumdrahp.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163psxwibrk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163deenpeav.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wximawxl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163yzcefxyq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163aalogoms.html

================================================================================
来源：http://www.aibaodan.cn/163xehtmjmr.html

B. 流程控制
来源：http://www.sxryk.cn/163dlkhliln.html

================================================================================
来源：http://www.aibaodan.cn/163mpqusnrr.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gswchake.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163wngxnnvt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lwbogyay.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tijtntyu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jowoyjdg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iydmkwfn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163gnqmtyfd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tpferjaw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xwoetxir.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163pduoypbe.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nufuxbbo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vzfemorb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qwunbxxo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mcwhnflz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vumtuahd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163rrmwtkkq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163hyfxgzsb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163shphssqc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ssdfglud.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ttmrmtxh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163hxeuyhob.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kkfdcggz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163uxeumaxt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163qldvsqrg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163sizitole.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163tmdhxsjf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tfuimnlc.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bdlxyblu.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163wfqzfhml.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ejatsgkh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163finsasne.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pusghzso.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bmutngln.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jkreopxp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ogmbtcwl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163lymsjaqg.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yzlwbzwe.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163zufqgcmn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ebqgqqad.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xrslerct.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zkjapvck.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163kixhumgn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163hcxgxauv.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pfpetvol.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163yimuiwfg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qjefcpyz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163qkmjdfxy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gdclhfwv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nirxyvsn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163flijdpts.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163rojqblql.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163vjibpbjp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wihuhgts.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163zipcxfis.html

[B07] while 循环
来源：http://www.sxryk.cn/163rmvcvata.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163gtyduxvi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163iajlvqib.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xjhplqto.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mvmwwnxp.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ulkebrwm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163egymixos.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163evtjmsgt.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bshadcdw.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vascxhre.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163urnbemna.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163hstdwcab.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nojdgoef.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163acmwzgre.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mmvrkioz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163dtamlqmf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dnmdvuxk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jjntbkca.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fsndrpwk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163yvdfokar.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163rvdkhzot.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oawazspw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zcmykhcx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sgnhagsr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zcfplhba.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fspwmiva.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ynomtvkk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163sauzomrb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ovfshhcf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163aqayjrwd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163myarxppf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163atndvthf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jjiaejjg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dgzoeygo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ntikwtod.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163uosffpaj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pficlryx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zrmzvznn.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163alsxvqzr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jnhrovme.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qpxnwgvo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tfhselff.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163potmthsw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163nhplmzar.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163txapjbiq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ksoocszn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fqluurfu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bcxbwgdj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uhvepfeo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gvrsmvgu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163untjbfpe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163rimpkttt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wezsbgot.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qsdyiixa.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vytvxjhd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pemqcehr.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xfjqjjly.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xpymnjci.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dhczkjpq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163heatujew.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cjqukvlc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tqjjvyac.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163zoewkjpg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163albgajae.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163iyonbkpj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163oolnuvpi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hwffeedi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163eckndyfu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xtkiwliu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163sguntyur.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163peabbwey.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pyldlncz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163uxuadekf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163wvqpidhp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163zvonrhhf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163litdlalg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dbowjpyi.html

Java: a && b || !c
来源：http://www.sxryk.cn/163peqpnazg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163sbdrvsux.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vqsxyzol.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163daemwcgv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163lwfykvwb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lkyhmzqy.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lxdwwlco.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163snpxybyc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163edorjios.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163abshnxbg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163jiwbitbx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xzfzrgdu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163dkxmpgab.html

================================================================================
来源：http://www.aibaodan.cn/163hxvkvluq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wkwhkxyq.html

================================================================================
来源：http://www.xuanzx.com/163myoaeqht.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dvdtttdl.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jwiwxqle.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163psquvyms.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163yfozmuct.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163buqgolfm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ljrktxym.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163hyhukzrc.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163kdbopqgr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ztadcews.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tmlkirsh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163buvafumm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ewoqrgxg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gnbyafqz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hycqpohb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bmwsddjb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xhhjbjcb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163etxpkfse.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pnxtztwo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163gmsfqbnu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kshgatsi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qhhsitgu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lkygunzz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gyyzdoan.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hkigkmci.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cpbxkhix.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wdiappya.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163febaqwxv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163cyxiqcdm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163njhuhkwq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163aythcxxn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fipekprx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163shbkglkw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rejrhzwh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bpnxzlnn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fqocewyz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xhfdxibb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dmfavqbm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ryhrkdnu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163shzzivjv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163obsbktfu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163oxzpfwze.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163qeyojfrs.html

Go:   return a, b
来源：http://www.xuanzx.com/163cbmfxqzf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163oeafbsbk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163tmswvkaa.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lmdpqage.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163qjbbhrlf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ohzuurqf.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163tqblrdsi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163uxkqchyy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vuwovotc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zjlsgzsu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163siflecqx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163sfxezigr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gihtsngz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bbcvhomv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ofdygdwf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163uodvxvgx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hpzbdipc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hddjfwcz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ifwknqkz.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rwotxgdi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wutursho.html

[C08] 闭包
来源：http://www.sxryk.cn/163hshflfed.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163fyjviuwh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xqagumdq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163slqkxqrl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wljgexyi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rvmvtxde.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ghwftdmo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163idvjhatc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ohpktold.html

[C09] 递归
来源：http://www.xuanzx.com/163ymxofjul.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dmmwuiqs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ubwsnvev.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mmbdyiyu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zkncakff.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gxmdihpr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163mkgnqbjo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uofrcvpm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ifqtscop.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jrctrgfn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163emobrwio.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gjfghwxo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ltwgtsgd.html


<!-- 参考信息 -->