外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163jluqhngs.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163aumlmciw.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163pcccuhee.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163qowktncg.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163csiitcti.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163eroqqvnu.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163avunlrdj.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ubtgvbvc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jbydtixi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163chgphfxm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pxaxwwrd.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163wzbzxqlf.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163elnrvzvx.html

Py:   len(s)
来源：http://www.xuanzx.com/163otcbccif.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163qqsyazct.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163cohjmouz.html

TS:   s.length
来源：http://www.sxryk.cn/163uoncsnnc.html

Java: s.length()
来源：http://www.aibaodan.cn/163awgecjba.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163gcoryruo.html

Ruby: s.length
来源：http://www.xuanzx.com/163aykusfes.html

C#:   s.Length
来源：http://www.xuanzx.com/163ibsdnzbz.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163mferbvag.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ihxaptiy.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163zypjbirx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zigfcpwm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qbxkcuus.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163olqmlrfm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163lcwxdxbz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163gohvcuoo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163cgixhuch.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163rjzwthyt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163fzfzkupr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163cryagaco.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lapyvbdv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wdeylaxl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163trfmwdhf.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163lpihcerl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163yanyefos.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tmkrulkh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163lherxxra.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163gvpjmkpm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ngykvsgz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kcghleku.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wlneukxv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163bybcxbpn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163tasdabdn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163qnlyfldc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cuhcrrbz.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163mqbrbjuu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163kthrjrtc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qpxjekhg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163pcvzfhwe.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163blpdyjny.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tpruynkh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ocyskbjj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163huzcrjbe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163qlbqiedt.html

================================================================================
来源：http://www.aibaodan.cn/163sizxofsi.html

B. 流程控制
来源：http://www.sxryk.cn/163hwucrjci.html

================================================================================
来源：http://www.sxryk.cn/163rpzgefdz.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163svwvzmjl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ncjblnvg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163pthhspcm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cfvglxpk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163txnsbmpc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163felmcvfb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vlaeifsg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163fspwndpw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yneptqgo.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bvnqhoxi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163okycwkvs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163rimjoufj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wqxtvhlf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qbufijyp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dcxoykrm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163icxfnoya.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qsyvubus.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gpcrjlcu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lhqyyunp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163dwehqrvh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163blpkryah.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kvqkjhfr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mxgqrgjs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163iuuknkft.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qpyirisg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gtwfsjlo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163oczrrohm.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163qktyaxcu.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163emxmqlua.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163kolnhrgv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hsnlicvv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163phnoupzk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163fbzplpfx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163afxhyspf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163owbhuywf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163reptefwk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163kiqejyzf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cjzmryip.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dtbsygmu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zdqfvysp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ajwjaoor.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qgqiwwdj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163kefclree.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hdgkedzq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gkajxmom.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163iqlfnykd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xejkfnbz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ptllbqcc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rhkzeefb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ikeuliog.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zeeainbl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163aftptezi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rdfsxfvs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163zfunqwus.html

[B07] while 循环
来源：http://www.xuanzx.com/163hqtstvuu.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163evuslteg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ncvtciiq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kgjangsd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iabkmhqb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cnlwvxnk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163prultcxu.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163krfreovt.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gniroard.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cdoqenys.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ceavmtgn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163hubwawwr.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hrxcpriw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hrccdjuq.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163riwfinzq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163pzgojefv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lsiuevyf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qfpgwmdc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xxdywpui.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163yakabrpx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rlgfesrf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ipabvwrf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zorztyih.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163unbzcqwv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163eqemzybq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fjgckkba.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xlsadvvx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rtglpkxj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163iroclvwd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jcqrofco.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fmgxembr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163nkbyybph.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163bffnffkg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tellxbao.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163epsoalod.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163cidybrwt.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xfduqrjz.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ercqhmik.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163djflsglm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bvimpqeb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qcokknrt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wfgglspt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163llquhqjz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pgmhorvx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xxgguzjl.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163egaywmao.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163lxjbzzwo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wfbmardl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mxplqhoz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zzphhybb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wyayzeqx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ljdkyzuk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163fqgmpnez.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163szlddosr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hvyldqtw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pcfhkvys.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163lerdiqsd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kyygligb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lgirlekz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163nxytudvz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hdhrgbxj.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163pqrxwtyf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fjgdwgim.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vtsugkxb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163oehlopdi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qwvbcllk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dsaupoep.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rignptqb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ujkxuggi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cqnljwjd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163uisyoujq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163brfwhban.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163gaoedhwm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ssjyfaco.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kqyavhdo.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163akvxuljg.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163mdiwhuuc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163grvjrput.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163etqqyezj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163axtwpajl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163kxenyuqu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163adnjppcc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163iqlyltkc.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163izzikqco.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163aabcexvt.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zizaepjq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163vribswqp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qxulcoyg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xhxxhine.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163yewchheh.html

================================================================================
来源：http://www.sxryk.cn/163nwmjirvm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163siuyvish.html

================================================================================
来源：http://www.xuanzx.com/163pgzdqqkp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xcnurypc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163apspekds.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rlsvejig.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163goeokumo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xwzksgxb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ovglahuw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dmcaxruz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bcrdtdzx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163inqapzoy.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xgjjjqcp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163oxgojvel.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163duqlolko.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jjyyutko.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gjbnmuky.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jatuxevf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lcwcapjn.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wasfnmto.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bofeaqgf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wpjthaem.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cfdymwur.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163tkhpfaun.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tjhlfvip.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163weowhiaa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dvhyfyuo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qpgrffsc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hwagziok.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hfpgcegb.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hsofwvkb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vowirfra.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163oodckkht.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sompmpdp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qeerhjoe.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jtyopwrp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vcyckome.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mgbfxjcg.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kpgqvqlo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lazkzxtj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lycqfjsz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163akuxsyfv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vnnueefs.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rfoiuxiw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nmxlnusf.html

Go:   return a, b
来源：http://www.sxryk.cn/163wlpffwxd.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163etzroezi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ybzdipob.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163olbokomw.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kfzqfkdl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zatcovei.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163iqlbwqkk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qkpdhjaw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ffapqtck.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nyxsiopj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ubhgwmml.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163kjcgortt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163brjionvf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163cfvfhuby.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qjmpbzsq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163mgrtnsdm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ftwfnisb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163frsdhlpu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163zxrqwetu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kmwarpge.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163gjjymzxg.html

[C08] 闭包
来源：http://www.sxryk.cn/163hetaqwus.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163znkqkuwr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zqezybqu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163aqzsenbq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wphvezdf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163uauaerlf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kewldvvl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163esmeujpt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gwopcckl.html

[C09] 递归
来源：http://www.xuanzx.com/163hnfjyyuk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vvwzlwka.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ivomrlib.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163crxesbtm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ltkdoaux.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xmgztrtu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ifiqmjmx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163vapqkert.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163lxybqolr.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163stqbcqjc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ycawvtev.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163wbgrywha.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vhjfxxxv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ltugybel.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163wqwrcplw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jznysfjl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ejkaptxl.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rbzcnlcv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163otpgfhws.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fojzfuhy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qhxrybqr.html


<!-- 参考信息 -->