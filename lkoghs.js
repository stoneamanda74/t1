外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163nkxipthp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163rbiwlcxy.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ujmebwke.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163uihukvxi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163cweibnzc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163hrvbbnez.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163jspzsxvs.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163zgfikasf.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163slsvgxsn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163eykwwxoy.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dnywdfjo.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xuaxsejn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lleggyyy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dhhxatpd.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yvpuhbkg.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163nezszisz.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163bsodmosp.html

Py:   len(s)
来源：http://www.xuanzx.com/163ukhiycju.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163psubevix.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163huazxony.html

TS:   s.length
来源：http://www.sxryk.cn/163sznrtuso.html

Java: s.length()
来源：http://www.aibaodan.cn/163blffsddn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163cdiraccr.html

Ruby: s.length
来源：http://www.xuanzx.com/163eggzdpbh.html

C#:   s.Length
来源：http://www.xuanzx.com/163buygnjfm.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163esvzfwhl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163zotsvbuh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163uqeqiosn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uzdolmrr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hbmsxlhf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rsgwnrap.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163obipjoob.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163zwmnvaqn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163yayxmhgb.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163yzxuozhy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163jatxgdfw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163wqnopmuo.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163srjighzm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pzzgfagz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163idklakhe.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jggobmyi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163hlykhdav.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ilqoibzz.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163mmknsjom.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163zwfzkbik.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163nbztbrlg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jitcvolq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hdzrqbmy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mhgqxcdf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lzegfkby.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163odayzknn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163wpwaubsk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ecbnnbpj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qffpptma.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ojwxhjye.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163wdneagwo.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ljllsyip.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163sxwijbyv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163yrurrorc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163yavjsntu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jdmypajl.html

================================================================================
来源：http://www.sxryk.cn/163qgqmwzjm.html

B. 流程控制
来源：http://www.xuanzx.com/163thvfdfuj.html

================================================================================
来源：http://www.xuanzx.com/163bxgahipg.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ptetpkzi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163mtrzrzxz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ecbwfjxz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163boswhznn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xowxynah.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xytsizaw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163eyhcjpyy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163nttaprwq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163esgyvqsq.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ebcogvje.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163eaiwwfll.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ojmzjxem.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gepynvia.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163moysasax.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xupbmnut.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163oabbtlxj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163wxtottwf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tsanypjj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163eniewfmf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ubonyuxw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163gzoxuims.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163iderpdrc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163whmysvcn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163bijlupsq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kzbuwvpf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163lvsbgqdc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163mrnvpswf.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ymnefwqb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bprqwsga.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163retjwzet.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ptudftjy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163teoccfrx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163apnejgfd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163uynvclej.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163tvxzsxld.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163gozcawio.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dmocjxjb.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163yjxnmgpy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163oqsyddve.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163krfwsxzx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mxwcatmg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163mimdkiuj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ykomnybj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163htjutqdm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xzwxgmvb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163yiquslww.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163hmxnlekm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ydsudkzd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ebwdmhnk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ztypnqiw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163krcwrzcd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rsseylpt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163grknfvug.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qbiwftib.html

[B07] while 循环
来源：http://www.xuanzx.com/163toyjhfyk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ulelzeuv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mmjjouca.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aknlqeyu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jgokbpir.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163febaeojs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163iyktejka.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fdzzbxfz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rffrclvn.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163jnzzzkir.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163yxmmwmsf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163xlhnptiu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ucfoppzv.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cblpvwzf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cjaeucya.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jiwfukxg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xhuhsmkx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aebvpdwa.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163lgnjhjji.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163weqfljsg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163dillmtna.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aalpygrv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kzzptxnq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163orujvzxi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cwkybkru.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nnwccyqt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dvpdbgna.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hhijvrhj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hxuuqgur.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163pwodtqxb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zlvurnna.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kuetxnoe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163rsrnpaua.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163lunjtmdj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cedosofm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163zbtsdcio.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ixrbwtql.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163nixloavx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ivnkfdxl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163aoyrfpzt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163peqeiqpe.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kzkdwozn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qmkmrdkc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163jqocuxhn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xskxammd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163rhldmbve.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163roilfuoz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fydpgbih.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rcxlhbyf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fndasxfz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wxsjxfji.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163grqqsmvy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163rjfeoiwa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163mmgqdauf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163aaafumlr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mymxsuwe.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gesqwnwf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xnmviulp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163iykuvwkb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xnmqwfdx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ysdirebx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qlgetsge.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ezrfrjxp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tevkrjyd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163vznfojlt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ddozyeea.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bxuxjjzl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pcpayqjx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163thobfvad.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163sqevswrb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163eetfefdk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fcmyrpwj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163yloffqio.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jzfrpxjl.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163fujaqvid.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lrntvluk.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ylectkfr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ugygmzxx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163saxkwznl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163hnkwjqhc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163mxkdclcc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163sdrfpuov.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fsmcdlnn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xczsfpnj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wjctvqku.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163evqhavei.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163uwofggdo.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163firtfynm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163stetluew.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ivbzlgru.html

================================================================================
来源：http://www.sxryk.cn/163vjleouqw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lrpgzzqf.html

================================================================================
来源：http://www.sxryk.cn/163bxdkfben.html

[C01] 定义函数
来源：http://www.sxryk.cn/163raraszrk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163myufstou.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zlyjxpmy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163sdprhnev.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wrpcgxur.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fwqntdon.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163iaazmvil.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qjjlzfeu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mjszapnt.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ueufjhyi.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163eitspfbw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dnnwluuw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163eebimuaf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ngpnmttq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fjedqary.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wwdgbanw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pqsqbmef.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fpnkxjmn.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xhqbdcpg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gwnsjvji.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ungfllmm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jrfrzgqp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qpuxwgvd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ecnbxjid.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163rddqbzol.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163frzaxskm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163uvklidmc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163skkjqqgc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163trbbvjub.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uwcnaqbh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fozrmqej.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dckyxrlx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ypgatcrj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zivciwot.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ryilddgh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163foixsora.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ojetsxpu.html

Py:   return a, b
来源：http://www.xuanzx.com/163tubdwmyl.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163rhhqpodb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vyemivpv.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wugglvjx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ycqfmhxa.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tjfapacl.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lfqmoffa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163meqopbuy.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163unyhcncm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rwthnxsj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163euxywmxn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ewhdvudv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wpqbnxjz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kefvuiqb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yjocfwfi.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ggpgtlqq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ddhikrqj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vwjlxxso.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163arqjzwvc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tskeekpg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163hplbgvtv.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rkrvbxlr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163yakqrqgr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fzwrhycf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ckuxmwyq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xjacfwfz.html

[C08] 闭包
来源：http://www.sxryk.cn/163tfiogrqr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vhuakzvd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163emwqztou.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xilsndav.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yuhyuprz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163larxhjne.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163eashghcm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vlwbkwdg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zvyzpvlq.html

[C09] 递归
来源：http://www.xuanzx.com/163irtwxdia.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ybmtrked.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wgvybkrs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gbywvsvu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pyrdthbp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fdnefonc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nsclrgqq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163kdftbxvi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qktsqdhj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qlmxkjys.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zllmujht.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163sdmbgeil.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163hxxbbxnk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yocmwwaw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163umsosmnl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163oxcosqii.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gttuvniw.html


<!-- 参考信息 -->