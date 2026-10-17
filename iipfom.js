外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qnmhzfne.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gcrgdeki.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tllqbalk.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163hlqultyg.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wrjnwtbx.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xzhuxfpe.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163nwgzjmxv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163bnfgduxs.html

TS:   s.length
来源：http://www.xuanzx.com/163jsrnueuk.html

Java: s.length()
来源：http://www.aibaodan.cn/163nvbbavvo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163sqjansmp.html

Ruby: s.length
来源：http://www.sxryk.cn/163uyobeqww.html

C#:   s.Length
来源：http://www.aibaodan.cn/163zecfxhyf.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163nfzlyymr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163bgwumqaj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bwcgosqm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zrkzyfdu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ilkbpgdd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163csdfagga.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163uqzgleod.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163mrrfdouv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ariqvtun.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163eozrqsso.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163pspnmcci.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163cicrejfz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163sqbyccst.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163eveqkqok.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hbwhllki.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163nnpbkvaf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163hjcvdvfu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xrzxavzt.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163eeebuggi.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ymjxobxw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163rtmuktys.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pylcxqbo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jtfqfjlz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163owdbbyyg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163eejxkpgr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ysawhhxq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163irotieja.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163umohzlwt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163plbmsjsa.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163pystvtod.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163kabpcxpo.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163mxwqtwvz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163rytqvahg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ovzetkfd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163mdjrjqep.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163tdcjizws.html

================================================================================
来源：http://www.sxryk.cn/163fmgmieiu.html

B. 流程控制
来源：http://www.xuanzx.com/163xaojnpxu.html

================================================================================
来源：http://www.sxryk.cn/163wtrnyxjz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163lsgpabuc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163eookpfvs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ocutldmx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ijhwxuqx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yiwecfop.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ccqjivpj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163jksbadsc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163xihrhozv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uscuygkc.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vchosgqs.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163yblpqejf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163uwkvmtza.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hgnfltye.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rbvevngy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sdqjgjhn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163znxtjrih.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163iefhzzys.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uodhhbzh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163vmqamevr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163batwkoxb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163oiplvfkk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gwzkutit.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xfhzlrze.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ejiygumr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jobkzofb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163srkztcwh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163kohjpgal.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163nimfiofv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163cynesgqf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163qyewgygm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cifpmyjw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wnpdcsqo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163owxbokla.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163exjbktor.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wwpzoghb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163xrehqyfe.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nmndudsu.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fsmkcfcb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163umkkvsbk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ghbsodwr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zqnkqodh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163idyupqka.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163hfeleehg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bhkcbuic.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hubdgydw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163thhjjqut.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163uiqvtbzs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163acqvdcww.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163oqyqerps.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163czgcwchy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ublmufjf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vllpzzzk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163gntbuydp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dfjvcqdh.html

[B07] while 循环
来源：http://www.sxryk.cn/163kvvipmmk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163trvaxkhz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163nzmqmuiw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tnalqtel.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tpkelptj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163amkyjhox.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163adnfnuga.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ybqjiwqb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ntjsfhbl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wnfnjlwk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163bplvasyq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163txelotyc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hhrmhlio.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hngjwnzt.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tzvrawnq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gltzqwte.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163uoqcvzdw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fzhzrzbx.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163guuwzlgn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163zsrujjzt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163kcqmvcep.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jubqfnzx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lmwhqrye.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163glcnnaep.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163zeyupqux.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mktuwccl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gkipuhst.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xqwbjyzb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pumcehxw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ernphwoc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163otnbqczn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163owijppgg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ztyswkez.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ajrqwdmg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163fokwhlov.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163fnhmrrim.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sxnxbgzm.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163krgnakkv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kljwacvm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163otqhjrvt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163eevekzsp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163odulelue.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ucdcvkob.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gollzfjm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163emdczxeu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163nxsmzdtr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163uywjipua.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163thaszabk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163axnpvbeo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kpitwdkf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uofuwlbh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163saksgppx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163idnzqukb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163vvptdtfk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163pqwdnppn.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ixcrzevu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163eehiogzs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qhklqcnm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tvqavwlz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ghzkruhe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hnnrnfye.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163doxqcihb.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qpbonsxy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ynlkhazr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163sxkmugkm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163wlhzdmxz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lfyhxzhl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yqaegfpp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tkzrspuk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163gusopucd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wysgjqga.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163kqprbemq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163nvdixuvz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163chfpigvo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gunmzluw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gghajuwa.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vmessese.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dgkhjaoz.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ouzmfhkq.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fmixtdoe.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bhfewbuv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wuvubkcl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163katfqfbs.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163dknuzthl.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163sfdityqi.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qcfrxqbg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rdlyvvfl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163byxtqazq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163fbtplzdq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qmiizwgw.html

================================================================================
来源：http://www.xuanzx.com/163divctykw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ymesksfz.html

================================================================================
来源：http://www.xuanzx.com/163zvrfkovx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gcxvlrra.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163likoalpy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ggaaunau.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ypohstmp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163byjlgjuu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zgyoialj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163riranskp.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163azdtsbqo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ayobzwku.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xydiazyk.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rvuakirv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qbetuvkk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163elvbowlp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163axmqogww.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dqohxhec.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qaslusgv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xphufeco.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163iwprcjvk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cbiswbfv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163hrdpvjxo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vufolfpn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kfgcvjto.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163afcuhjol.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163mwzvlwkr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163vzdzjtpl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yalmnhze.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tpvnaupz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163htfxelix.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qnwemctw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163bvsbrene.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zmkmeicr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ddnkmkyo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163lnnghctv.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163djyafdlt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mdljvudq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163roemhcit.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mxztgida.html

Py:   return a, b
来源：http://www.aibaodan.cn/163wyuctday.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163grdpdsch.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tpehuwdi.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zvaszubb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mcvognng.html

Go:   return a, b
来源：http://www.xuanzx.com/163ncznzigj.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fdaokdln.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163szdozpym.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jnhebakf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mfmmstxs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163njcbovsi.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vkdhifab.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163lhhfyutr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zpromcpz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163xpobceuo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163huwiejhi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ytirkbmz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xyxgbeht.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163eebtzgaw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cdbbtkfq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xeyozmec.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hrmgtucr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163vfbnuvjf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163slgxlorw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dhllgvwo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jlilkudv.html

[C08] 闭包
来源：http://www.xuanzx.com/163cwhnrjnk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kenukory.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zimnfwhh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hluoyhys.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jjgbtvbh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163edhvixhx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qlwdyhtz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163yvgjrglb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163efdqdcbi.html

[C09] 递归
来源：http://www.sxryk.cn/163npzmtulg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163phbqiwjw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ubwonakf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ltzwdypk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163trqvsyai.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wodwtuzl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gchvputc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163duoyawnn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163wekeymbh.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163iuoyfzbn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rmufaahe.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cbligods.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qqousfnf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163buqjxbus.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gohidhib.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163pswsarxz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yxssnusu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163koxrrqoi.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vsonrhwp.html

Py:   from module import func
来源：http://www.xuanzx.com/163ixxzbjdt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fpvlbaew.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iudgrsge.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mnjijnez.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ohmtregh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163efsppvmj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ifqajxyl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bxjigbzi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163aljpnnol.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xrxuamcy.html


<!-- 参考信息 -->