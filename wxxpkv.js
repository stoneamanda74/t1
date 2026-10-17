外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163gknxvyco.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163jczoudla.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163jwoqbsgv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163hzkmglaq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163itbnaisx.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163yknbgahh.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163yzfmqxsr.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163tkhrgdyo.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163uursrscq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163aycxennc.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163iqwuwytp.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163bgmcvhyz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zahjleac.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163semfykef.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dmucxkqc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mngfqedp.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163nbzyroya.html

Py:   len(s)
来源：http://www.sxryk.cn/163daklqxvl.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ylmienlu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163vgfdysee.html

TS:   s.length
来源：http://www.sxryk.cn/163zonwluui.html

Java: s.length()
来源：http://www.aibaodan.cn/163airdcwdw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zbxxxgnv.html

Ruby: s.length
来源：http://www.xuanzx.com/163ovzpfdaq.html

C#:   s.Length
来源：http://www.sxryk.cn/163fnyqcena.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163eydhnudf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163mnjswotx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163qiczfbyr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sozdjnej.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163koabgvjv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gqxmztga.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163bondrduu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163jqcbcvci.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163hdduudyy.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163arrhvhjs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163wfcomydk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cfrspsxq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ngofkvfl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uvyeoshh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163vhkzptgo.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ypmavsxs.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fifvlzkn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ekprxhyp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jdomfvwz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163cjzlglbj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163qqezbcrp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wugqocjb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fgyhvpys.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163kcaiwxfu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163qwhecegl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163nxfssbmt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163acvraiab.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163lgngavfy.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163aixzcsdv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163shfujgqp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xzyitqqy.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pkwdhyqj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163yydxyarq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163bmntslbf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163blmryhef.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163atzudlhp.html

================================================================================
来源：http://www.sxryk.cn/163wxkzjhvk.html

B. 流程控制
来源：http://www.xuanzx.com/163dcigguyj.html

================================================================================
来源：http://www.sxryk.cn/163hjnxpzqb.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163mphoabxz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163yesxwjvy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163fprqisgp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hiijkpep.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ahpfklzb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163meifqicn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163pkzqzkgp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jfhxqxtx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qpcfkdyn.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163zsavlsex.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163pmgfcgml.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jteidadg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jvvukbce.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mtpfzqjm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hzjwcldf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163jobkpnid.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163mrivjiif.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163okdmqsko.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wwxjeegn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gbkykiad.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163eovqwave.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163trxbajnn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rgldcsxk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pxplcrvf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163tisspgbv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163ltsrarwe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163kmtgnaqj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ndgyhlnl.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nnlrcpsx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163dutttcbw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nfyfgmnb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yavyoucc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163iqudztet.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qntcexsf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gpsljgnd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ukmbiedl.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163robnorje.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163bthjdwwt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163mtycwzfi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bwnvixon.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pztnvfrc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163vjhdpyjq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ktfpiwjn.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163yarlwpoo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163kppmoxfa.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jphfmlso.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xtknvtgk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163phcjfgkv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163eupdqnfi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bhjvmsiu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qmnuygln.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ddywlfka.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163namfcscg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163jjoxvwao.html

[B07] while 循环
来源：http://www.aibaodan.cn/163sqgyouqq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ixpjkcph.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163fcowinyt.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163inxjyrnk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jgdxpxan.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mvbacsdf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zihmiqnt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lvwocbeh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uhufopbi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ocfvlxne.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163zgimfrmq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163civlxera.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fnmmohut.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ioenpexb.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kraazffi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163eucyrjtx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xebbmobh.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ulvpgogi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vvgopzmv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cmxldiah.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hswbwwzm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hcuzxjee.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ptpmvhpl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ruzibval.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ugewzfsa.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163cnnlvkuo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bybbudrc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xlrwjras.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xjoqznpt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163xdnvtmzu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ylnrbarl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163xdxdjndy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163brnkjnrl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zyarsgaf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kbtphluz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163iozhwpgf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163pikydazf.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zxiixtfv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163dwbkbcyp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kyejgfwm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rhuwpaxk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fqeifqbp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163atrtxsqm.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fcucyuel.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163njpwavqq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163zjuwroci.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kfmhhpgo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dvqvybij.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zffmtzga.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wkwoxuvg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ggbrqavf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163iyntmqzj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163dvmlsops.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163sgdiubef.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163feliergd.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163iausmdlr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fpmfmgos.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zqbzdrch.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rxdkxsrr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163rkhfkuxm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mcmgwbgw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xwwikdri.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163lmdttosx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cnazrevt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cuxptycv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rfuwxgfs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cfxjoyld.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bzwowtni.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163awybbqwv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gxpaqxmf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jrjckdjo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zuwzsbnt.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qiastopi.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ffggkwbj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nffehkzb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mzzkyhim.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163sthbledf.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gobfjnfl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rgvpcmae.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ggfvwfiv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jmalumpu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163hagrtqfq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163voxwrlky.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163piunywct.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163roswmeat.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wikdclnv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163vugawfiv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163elpfskts.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dwtvmkfn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ivcyfyhf.html

================================================================================
来源：http://www.sxryk.cn/163zksthtei.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tewvgzsa.html

================================================================================
来源：http://www.sxryk.cn/163uzjzcpzf.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163izvrjaje.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163dwwebfbu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pqqwesqm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ejimevru.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163setbwcgl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zrgtmckm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163muthlnxu.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163gvsjkksg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ngwmtkxz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163seokjzab.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ytauwora.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163gamgfgyn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zltqcsoh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163btzetnbt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163rifposwx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163cnupkwcr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163bucfgljb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163wwkifkxp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163vmwefbqr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ditjlkhn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xerufsmu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xkcjtwhz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fzylppgf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163utxejlru.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kymkckey.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dgccjwif.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163anthmyse.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163yqfpkxyc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xylbtrsm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kicxkyly.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ehlxxyca.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dfdrxugf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ozbbmxxu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163fybupeae.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163edgktrwe.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dumgjjdc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rwnyutwd.html

Py:   return a, b
来源：http://www.xuanzx.com/163zfodafgz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vwwpvscb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163npsvdhoz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163adthayvn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163fdukiegs.html

Go:   return a, b
来源：http://www.sxryk.cn/163viaitnmj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gqscvbxk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hdefastv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bsnorkjr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ufjifcsg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163qyumqshx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ubhasgll.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ompexshb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163yeqjpvcn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ytihnqsj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163rpcobywg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cdujfyzo.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jcamckpx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163shirqmmz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jifyuezu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163azshkucc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163domxpnhj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163qokglhnj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rwjmmabe.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qkuihaxd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163tguilcws.html

[C08] 闭包
来源：http://www.aibaodan.cn/163tfwcowwd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163akmgpyyb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ddccrhip.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gjxpnlem.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dhjjcluz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fiyoggsn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163hmtezitj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163yquhzotw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jvxtekbe.html

[C09] 递归
来源：http://www.sxryk.cn/163ciwjwzms.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vfclecgq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163cyhvvkos.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jtkioram.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ytwsjket.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163zbbnjiho.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163djgmcxlg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ryixeglk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163iwvxcohj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163zxszsqco.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rrkhlahp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vscfcaac.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ouzrgaiv.html

TS:   同 JS
来源：http://www.xuanzx.com/163uubangzm.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163kpfvonzg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ypysmycz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rneborsi.html


<!-- 参考信息 -->