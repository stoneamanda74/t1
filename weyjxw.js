外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163bqdnbosb.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163zlwmcwib.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163pilffbvm.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163mxaccuwf.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hpfohaas.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163xjlnjmoe.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ltrjvian.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ivgnmoex.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163jpkjvevx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163vfessefp.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163pafyogey.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ijjmyoip.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mnhtirjy.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163qvdtvuzx.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pvklanyr.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163fwgcbcjl.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163enrpswtw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jpgowvhu.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163dtnxxufb.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pvkqzsek.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pyugnveq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163czkkvheg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wopalxwk.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163yqixbfia.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mppxcyml.html

Py:   len(s)
来源：http://www.xuanzx.com/163elkcefyz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kzeowhnb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163opjphbco.html

TS:   s.length
来源：http://www.aibaodan.cn/163idocmhsj.html

Java: s.length()
来源：http://www.sxryk.cn/163ckyaifsa.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ttseqhwe.html

Ruby: s.length
来源：http://www.aibaodan.cn/163odrvutnn.html

C#:   s.Length
来源：http://www.sxryk.cn/163yiuyzjyx.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163xfiabaox.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163fjwiavhi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163pqhzmfyg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hhbcnxyf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ehrkxmyl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ivjrfnmu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jknodkmn.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163izjenrbz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163qyrhkfwg.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163otdxcbec.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163mrziuqgm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163asuxljoc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ucmpjngf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ienmbjnz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ncqzoxke.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163fclqvpnh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163cbegzggd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163gozkgcpv.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163kjkpgskj.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ovdimvop.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xbcczcxz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xyquslrn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163qiqodwcs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163lrswizwd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163czijdkzw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163arveijjo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163cspugrvj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163gxyvnzwu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163fkjxolsr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ufggykyl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163azobhuop.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163boxagbkg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vmlpcqki.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ufgmvvmd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163asdqepky.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163jukibwky.html

================================================================================
来源：http://www.sxryk.cn/163jlgrwjcb.html

B. 流程控制
来源：http://www.sxryk.cn/163klovqihc.html

================================================================================
来源：http://www.xuanzx.com/163pmphlenx.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163fjzaknak.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fxkkelgp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163kithgoch.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mfpopzte.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163odvoxkaf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fynretcd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dombkvbq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wycucupm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xwfughck.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163beomambc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jzwfhgei.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jmmridkq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bxduwyjd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cdcrrodi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pellapze.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ksafzpwo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163aykgvnoe.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163snwlvard.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163iqfmlybr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lvkdtyew.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163wedmhabe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yrdrdocl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cbvebnpd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163lnmdbyld.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163nirofogq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jtrtjzoa.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163clkgjnhx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mgkjqzbf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gjtviqmx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163deciqggn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mzqctwzr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vldjnasu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ygaotlrf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dkuscvjb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163whjhvlva.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163xllbldrg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163oefuotei.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163gquywiaa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163afrhgbbt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lkrozfie.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bgnbjoxi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nhebtczg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vduflywr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jjdufpxp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163efrxmoqx.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163bxpkrrdc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163aorzfyys.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163eeqpoozj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qzxsmvpk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163njcnolkx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fwhbhziw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fkmpynzh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wlqmrvej.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bjrrpusu.html

[B07] while 循环
来源：http://www.xuanzx.com/163ujomfjpg.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tcpaojok.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163pypbtizc.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mcyortum.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vpxkwvof.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lnqgjasi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163qukdjqca.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163etwcfgrg.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ppdxzyqu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wojprteo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163sfjthodx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163udjhdkrg.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hchwiqzp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hdcwxvvo.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xnuncfsw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163glpqwgex.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xijggmre.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jllmyzif.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ygtmwkfi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nwsezbgi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163uibqadbw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kfckpcpu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163happmkpy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oqjulmmn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vudoimkh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163iqmkmilu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yrpkfxwq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163djqlpohv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kpaktqrx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mbhaknmq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163scgognng.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163fzjopvui.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fbohmths.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163njsfgdwj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tdnxlfin.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163cmmxowoy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ltndzkfx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hgravtnc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pcdyshdd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pukyncvq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163flbagrre.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xbptyziy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kqnymsiq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163bzzoyobl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163nxlfracw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gafomasb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163bnyryziv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jzvkekdx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163spsjkuzc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jsvnmtbw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fyxhvozu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163fmrhljdy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163brvfsdzh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163nwtqdkxm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163uzifksbe.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163jzzwicah.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ihgezcqh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163btxtblzz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wnvqqgij.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163opxgkjuf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yduvqhrj.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vgynazvm.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163enslvfgw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ppzaiirz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163itlowmes.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hebhtzcd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163iwgaluvy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eqokzemm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xlvoqnih.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ouvtfief.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ztwvsmpi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163kfqqseng.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163klwrqajm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ixhebqkl.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163dvbsgkaj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wcenmzkd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zknlemdh.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xzfycwsr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163fescirsa.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qqqgyypj.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zxoxzedb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ilobopvh.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rdmaudrv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zoyrkmyy.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xkccehso.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fskhtwfl.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163aulyzlte.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jsusgzpm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lzcelmgy.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tpovxdws.html

================================================================================
来源：http://www.sxryk.cn/163zlnuoxit.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163eghthxdt.html

================================================================================
来源：http://www.xuanzx.com/163zpqrjboc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163nwjdwupx.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jfypdqhj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fvmmjiel.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163hmjweyow.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ixrkvxwv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rgcidxoh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jfafqcmp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xhrpbuuk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dyrsfetj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163cujqrsuc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163anpjyods.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163gowwmkwq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163inlopgrn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lcctrxwe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163tbbhqyik.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163yqjolxlv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wsmaiqmn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163aqtnmazt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163iwsygkup.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163uvwubpyu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163papcoegw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lvdqcdzn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163eifkchqj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pdahyezw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163efomqoqf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163yzxivuev.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163fmdozwcr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zzebgldu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163avrrghjl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tgexgchh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fhxwuena.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163iebfvjxw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163zpklkfyy.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163gbosdxxi.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vjqhcxxp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163scudrkyz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bkvmfqng.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bclxsolh.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zoyrrnci.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ozdjilsu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163msiyygbx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ngpazuhb.html

Go:   return a, b
来源：http://www.sxryk.cn/163yviozepn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xkxrddyd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163iejmhosk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ostoebxm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fzyraecm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ugjqmdmx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163azmeubnn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zzvkqbkz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uesnfcpt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163einyhbak.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163dnijbjxw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vbyqevcs.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mbekufso.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163yzjtoxpk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jmrglmzg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163twgztaib.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ordhbvpc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163yeotngnv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163uqvlgdjs.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xztmyyjg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bisivphc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163orkgfinf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hmjmuovz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163snfixibk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ihtazxox.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nrayvadl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xtyowdlu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163qljpuahh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163egqqqbxz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163faqjiztk.html

[C09] 递归
来源：http://www.xuanzx.com/163aesrsonp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163xkyixkzt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ezbrfwoj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163udcdcarf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163equvechz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pdvvwefb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163swabzsle.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163mbnyrvws.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vpdvbdlu.html


<!-- 参考信息 -->